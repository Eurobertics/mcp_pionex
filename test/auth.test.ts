import { describe, expect, it } from "vitest";
import { canonicalQuery, signRequest } from "../src/pionex/auth.js";

describe("Pionex authentication", () => {
  it("sorts query keys without URL-encoding the signature input", () => {
    expect(canonicalQuery({ timestamp: 1655896754515, symbol: "BTC_USDT", note: "a b" }))
      .toBe("note=a b&symbol=BTC_USDT&timestamp=1655896754515");
  });

  it("includes the exact body for POST signatures", () => {
    expect(signRequest(
      "POST",
      "/api/v1/trade/order",
      { timestamp: 1655896754515 },
      '{"symbol":"BTC_USDT","side":"BUY"}',
      "secret",
    )).toBe("db632a6d8942e57061bbb9ae0f1bc103e461ee1d2c85f1069e6613aa57bf88a6");
  });

  it("does not include a body in GET signatures", () => {
    expect(signRequest("GET", "/api/v1/test", { timestamp: 1 }, "ignored", "secret"))
      .toBe(signRequest("GET", "/api/v1/test", { timestamp: 1 }, "", "secret"));
  });
});
