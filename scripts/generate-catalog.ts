import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { parse } from "yaml";
import type { EndpointDefinition, JsonSchema } from "../src/catalog/types.js";

const sourceDirectory = process.argv[2];
if (!sourceDirectory) {
  throw new Error("Usage: npm run generate:catalog -- /path/to/pionex-open-api");
}

const sources = [
  ["openapi.yaml", "trade"],
  ["openapi_wallet.yaml", "wallet"],
  ["openapi_bot.yaml", "bot"],
  ["openapi_earn.yaml", "earn"],
  ["openapi_earn_dual.yaml", "earn_dual"],
] as const;

const explicitNames: Record<string, string> = {
  getSymbols: "pionex_market_get_symbol_info",
  getMarketTrades: "pionex_market_get_trades",
  getMarketDepth: "pionex_market_get_depth",
  getTickers: "pionex_market_get_tickers",
  getBookTickers: "pionex_market_get_book_tickers",
  getKlines: "pionex_market_get_klines",
  getBalances: "pionex_account_get_balance",
  newOrder: "pionex_orders_new_order",
  newMassOrder: "pionex_orders_new_multiple_orders",
  newMultipleOrders: "pionex_orders_new_multiple_orders",
  getOrder: "pionex_orders_get_order",
  cancelOrder: "pionex_orders_cancel_order",
  getOrderByClientOrderId: "pionex_orders_get_order_by_client_order_id",
  getOpenOrders: "pionex_orders_get_open_orders",
  getAllOrders: "pionex_orders_get_all_orders",
  cancelAllOrders: "pionex_orders_cancel_all_orders",
  getFills: "pionex_orders_get_fills",
  getFillsByOrderId: "pionex_orders_get_fills_by_order_id",
  getBalancesFull: "pionex_wallet_get_balance_full",
};

function snakeCase(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .toLowerCase();
}

function resolveReference(document: any, value: any, seen = new Set<string>()): any {
  if (!value || typeof value !== "object") return value;
  if (value.$ref) {
    const ref = String(value.$ref);
    if (!ref.startsWith("#/")) throw new Error(`External reference is unsupported: ${ref}`);
    if (seen.has(ref)) return {};
    const nextSeen = new Set(seen).add(ref);
    const target = ref.slice(2).split("/").reduce((current: any, part: string) => current?.[part.replace(/~1/g, "/").replace(/~0/g, "~")], document);
    return resolveReference(document, { ...target, ...Object.fromEntries(Object.entries(value).filter(([key]) => key !== "$ref")) }, nextSeen);
  }
  if (Array.isArray(value)) return value.map((item) => resolveReference(document, item, seen));
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, resolveReference(document, item, seen)]));
}

function toolName(category: EndpointDefinition["category"], operationId: string): string {
  if (explicitNames[operationId]) return explicitNames[operationId];
  const prefix = category === "earn_dual" ? "earn" : category;
  return `pionex_${prefix}_${snakeCase(operationId)}`;
}

const endpoints: EndpointDefinition[] = [];
for (const [filename, category] of sources) {
  const document = parse(readFileSync(resolve(sourceDirectory, filename), "utf8"));
  for (const [path, rawPathItem] of Object.entries<any>(document.paths ?? {})) {
    const pathItem = resolveReference(document, rawPathItem);
    for (const methodLower of ["get", "post", "delete", "put"] as const) {
      const operation = pathItem[methodLower];
      if (!operation) continue;
      const method = methodLower.toUpperCase() as EndpointDefinition["method"];
      const operationId = operation.operationId ?? `${methodLower}_${snakeCase(path)}`;
      const inputProperties: Record<string, JsonSchema> = {};
      const required = new Set<string>();
      const queryParameters: string[] = [];
      const bodyParameters: string[] = [];

      for (const rawParameter of [...(pathItem.parameters ?? []), ...(operation.parameters ?? [])]) {
        const parameter = resolveReference(document, rawParameter);
        if (parameter.in !== "query") continue;
        // The server owns the short-lived authentication timestamp. Exposing it
        // to an MCP caller would invite stale signatures and is never useful.
        if (parameter.name === "timestamp") continue;
        inputProperties[parameter.name] = {
          ...resolveReference(document, parameter.schema ?? { type: "string" }),
          description: parameter.description ?? parameter.schema?.description,
        };
        queryParameters.push(parameter.name);
        if (parameter.required) required.add(parameter.name);
      }

      const rawBodySchema = operation.requestBody?.content?.["application/json"]?.schema;
      if (rawBodySchema) {
        const bodySchema = resolveReference(document, rawBodySchema) as JsonSchema;
        for (const [name, schema] of Object.entries(bodySchema.properties ?? {})) {
          if (inputProperties[name]) throw new Error(`Duplicate query/body parameter '${name}' for ${method} ${path}`);
          inputProperties[name] = schema;
          bodyParameters.push(name);
        }
        for (const name of bodySchema.required ?? []) required.add(name);
        if (!bodySchema.properties) {
          inputProperties.body = bodySchema;
          bodyParameters.push("body");
          if (operation.requestBody.required) required.add("body");
        }
      }

      const inheritedSecurity = operation.security ?? document.security ?? [];
      const description = [operation.summary, operation.description].filter(Boolean).join("\n\n");
      endpoints.push({
        name: toolName(category, operationId),
        title: operation.summary ?? operationId,
        description,
        category,
        method,
        path,
        authenticated: Array.isArray(inheritedSecurity) && inheritedSecurity.length > 0,
        destructive: method !== "GET" && !/check/i.test(operationId),
        weight: Number(/Weight:\s*(\d+)/i.exec(description)?.[1] ?? 1),
        inputSchema: {
          type: "object",
          properties: inputProperties,
          required: [...required],
          additionalProperties: false,
        },
        queryParameters,
        bodyParameters,
      });
    }
  }
}

const duplicateNames = endpoints.map((endpoint) => endpoint.name).filter((name, index, all) => all.indexOf(name) !== index);
if (duplicateNames.length) throw new Error(`Duplicate MCP tool names: ${[...new Set(duplicateNames)].join(", ")}`);

let revision = "unknown";
try {
  revision = execFileSync("git", ["-C", sourceDirectory, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
} catch {
  // A downloaded source archive has no Git metadata; generation still works.
}
const output = `// Generated from pionex-official/pionex-open-api at ${revision}. Do not edit manually.\nimport type { EndpointDefinition } from "./types.js";\n\nexport const endpointCatalog: EndpointDefinition[] = ${JSON.stringify(endpoints, null, 2)};\n`;
writeFileSync(resolve("src/catalog/endpoints.generated.ts"), output);
console.log(`Generated ${endpoints.length} MCP endpoint definitions.`);
