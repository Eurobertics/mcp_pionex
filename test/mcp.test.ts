import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { describe, expect, it } from "vitest";
import type { ServerConfig } from "../src/config.js";
import { createServer } from "../src/mcp/create-server.js";

const config: ServerConfig = {
  apiBaseUrl: "https://api.pionex.com",
  requestTimeoutMs: 1000,
  maxBatchOrders: 10,
};

describe("MCP server", () => {
  it("lists all tools and preserves structured Pionex responses", async () => {
    const executor = {
      async execute() { return { result: true, data: { tickers: [] } }; },
    };
    const server = createServer(config, executor);
    const client = new Client({ name: "test-client", version: "1.0.0" });
    const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
    await Promise.all([server.connect(serverTransport), client.connect(clientTransport)]);

    const listed = await client.listTools();
    expect(listed.tools).toHaveLength(70);
    const response = await client.callTool({ name: "pionex_market_get_tickers", arguments: {} });
    expect(response.structuredContent).toEqual({ result: true, data: { tickers: [] } });

    await client.close();
    await server.close();
  });
});
