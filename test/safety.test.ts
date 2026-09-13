import { describe, expect, it } from "vitest";
import { endpointCatalog } from "../src/catalog/endpoints.generated.js";
import type { ServerConfig } from "../src/config.js";
import { applySafetyPolicy } from "../src/safety/policy.js";

const config: ServerConfig = {
  apiBaseUrl: "https://api.pionex.com",
  requestTimeoutMs: 1000,
  allowedSymbols: new Set(["BTC_USDT"]),
  maxOrderQuoteAmount: "100.00",
  maxOrderBaseSize: "2",
  maxBatchOrders: 2,
  maxBotInvestment: "250",
};

function endpoint(name: string) {
  const result = endpointCatalog.find((item) => item.name === name);
  if (!result) throw new Error(`Missing test endpoint ${name}`);
  return result;
}

describe("write safety policy", () => {
  it("adds an idempotency-friendly client order ID", () => {
    const result = applySafetyPolicy(endpoint("pionex_orders_new_order"), {
      symbol: "BTC_USDT", side: "BUY", type: "MARKET", amount: "20",
    }, config);
    expect(result.clientOrderId).toMatch(/^mcp-/);
  });

  it("enforces order-type-specific fields", () => {
    expect(() => applySafetyPolicy(endpoint("pionex_orders_new_order"), {
      symbol: "BTC_USDT", side: "BUY", type: "LIMIT", size: "1",
    }, config)).toThrow(/price and size/);
    expect(() => applySafetyPolicy(endpoint("pionex_orders_new_order"), {
      symbol: "BTC_USDT", side: "SELL", type: "MARKET",
    }, config)).toThrow(/require size/);
  });

  it("rejects disallowed symbols and excessive decimal amounts", () => {
    expect(() => applySafetyPolicy(endpoint("pionex_orders_new_order"), {
      symbol: "ETH_USDT", side: "BUY", type: "MARKET", amount: "20",
    }, config)).toThrow(/not in PIONEX_ALLOWED_SYMBOLS/);
    expect(() => applySafetyPolicy(endpoint("pionex_orders_new_order"), {
      symbol: "BTC_USDT", side: "BUY", type: "MARKET", amount: "100.0001",
    }, config)).toThrow(/exceeds configured maximum/);
  });

  it("checks nested batch orders", () => {
    expect(() => applySafetyPolicy(endpoint("pionex_orders_new_multiple_orders"), {
      symbol: "BTC_USDT",
      orders: [{ amount: "101" }],
    }, config)).toThrow(/exceeds configured maximum/);
  });
});
