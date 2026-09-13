import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { endpointCatalog } from "../catalog/endpoints.generated.js";
import type { ServerConfig } from "../config.js";
import { PionexClient, type PionexExecutor } from "../pionex/client.js";
import { PionexError } from "../pionex/errors.js";
import { applySafetyPolicy } from "../safety/policy.js";
import { jsonSchemaToZod } from "./schema.js";

export function createServer(config: ServerConfig, client: PionexExecutor = new PionexClient(config)): McpServer {
  const server = new McpServer({ name: "mcp-pionex-management", version: "0.1.0" });

  for (const endpoint of endpointCatalog) {
    server.registerTool(
      endpoint.name,
      {
        title: endpoint.title,
        description: endpoint.description,
        inputSchema: jsonSchemaToZod(endpoint.inputSchema),
        annotations: {
          readOnlyHint: !endpoint.destructive,
          destructiveHint: endpoint.destructive,
          idempotentHint: endpoint.method === "GET" || endpoint.method === "DELETE",
          openWorldHint: true,
        },
      },
      async (input) => {
        try {
          const safeInput = applySafetyPolicy(endpoint, input as Record<string, unknown>, config);
          const result = await client.execute(endpoint, safeInput);
          return {
            content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
            structuredContent: result && typeof result === "object" && !Array.isArray(result)
              ? result as Record<string, unknown>
              : { result },
          };
        } catch (error) {
          const details = error instanceof PionexError
            ? error.toJSON()
            : { error: error instanceof Error ? error.name : "Error", message: error instanceof Error ? error.message : String(error), retryable: false };
          return {
            isError: true,
            content: [{ type: "text", text: JSON.stringify(details, null, 2) }],
            structuredContent: details,
          };
        }
      },
    );
  }
  return server;
}
