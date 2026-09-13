#!/usr/bin/env node
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { loadConfig } from "./config.js";
import { createServer } from "./mcp/create-server.js";

async function main(): Promise<void> {
  const server = createServer(loadConfig());
  await server.connect(new StdioServerTransport());
  console.error("mcp-pionex-management listening on stdio");
}

main().catch((error) => {
  console.error("Fatal MCP server error", error);
  process.exitCode = 1;
});
