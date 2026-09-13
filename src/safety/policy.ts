import { randomUUID } from "node:crypto";
import type { EndpointDefinition } from "../catalog/types.js";
import type { ServerConfig } from "../config.js";
import { compareDecimals } from "./decimal.js";

const SYMBOL_KEYS = new Set(["symbol"]);
const QUOTE_AMOUNT_KEYS = new Set(["amount", "currencyAmount"]);
const BASE_SIZE_KEYS = new Set(["size", "baseAmount"]);
const BOT_INVESTMENT_KEYS = new Set(["quoteInvestment", "quoteInvest", "quoteTotalInvestment", "investment", "extraMarginAmount"]);

function enforceDecimalLimit(args: Record<string, unknown>, keys: Set<string>, maximum: string | undefined, label: string): void {
  if (!maximum) return;
  const visit = (value: unknown): void => {
    if (Array.isArray(value)) return value.forEach(visit);
    if (!value || typeof value !== "object") return;
    for (const [key, child] of Object.entries(value)) {
      if (keys.has(key) && child !== undefined && compareDecimals(String(child), maximum) > 0) {
        throw new Error(`${label} '${key}' (${String(child)}) exceeds configured maximum ${maximum}`);
      }
      visit(child);
    }
  };
  visit(args);
}

function symbolsIn(args: Record<string, unknown>): string[] {
  const values: string[] = [];
  for (const key of SYMBOL_KEYS) if (typeof args[key] === "string") values.push(args[key].toUpperCase());
  if (typeof args.base === "string" && typeof args.quote === "string") values.push(`${args.base}_${args.quote}`.toUpperCase());
  return values;
}

export function applySafetyPolicy(endpoint: EndpointDefinition, originalArgs: Record<string, unknown>, config: ServerConfig): Record<string, unknown> {
  const args = structuredClone(originalArgs);
  if (!endpoint.destructive) return args;

  if (config.allowedSymbols) {
    for (const symbol of symbolsIn(args)) {
      if (!config.allowedSymbols.has(symbol)) throw new Error(`Symbol ${symbol} is not in PIONEX_ALLOWED_SYMBOLS`);
    }
  }
  enforceDecimalLimit(args, QUOTE_AMOUNT_KEYS, config.maxOrderQuoteAmount, "Quote amount");
  enforceDecimalLimit(args, BASE_SIZE_KEYS, config.maxOrderBaseSize, "Base size");
  enforceDecimalLimit(args, BOT_INVESTMENT_KEYS, config.maxBotInvestment, "Bot investment");

  if (endpoint.name === "pionex_orders_new_order" && !args.clientOrderId) {
    args.clientOrderId = `mcp-${randomUUID()}`;
  }
  if (endpoint.name === "pionex_orders_new_order") {
    const type = String(args.type ?? "");
    const side = String(args.side ?? "");
    if (type === "LIMIT" && (!args.price || !args.size)) throw new Error("LIMIT orders require price and size");
    if (type === "MARKET" && side === "BUY" && !args.amount) throw new Error("MARKET BUY orders require amount");
    if (type === "MARKET" && side === "SELL" && !args.size) throw new Error("MARKET SELL orders require size");
  }
  if (Array.isArray(args.orders)) {
    if (args.orders.length > config.maxBatchOrders) throw new Error(`Batch contains ${args.orders.length} orders; maximum is ${config.maxBatchOrders}`);
    args.orders = args.orders.map((order) => {
      if (!order || typeof order !== "object" || Array.isArray(order)) return order;
      return { clientOrderId: `mcp-${randomUUID()}`, ...order };
    });
  }
  return args;
}
