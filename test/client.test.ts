import { afterEach, describe, expect, it, vi } from "vitest";
import { endpointCatalog } from "../src/catalog/endpoints.generated.js";
import { PionexClient } from "../src/pionex/client.js";

afterEach(() => vi.restoreAllMocks());

describe("PionexClient", () => {
  it("signs, encodes and returns the original Pionex envelope", async () => {
    vi.spyOn(Date, "now").mockReturnValue(1655896754515);
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify({ result: true, data: { balances: [] } }), {
      status: 200,
      headers: { "content-type": "application/json" },
    }));
    const client = new PionexClient({
      apiBaseUrl: "https://api.pionex.com",
      apiKey: "key",
      apiSecret: "secret",
      requestTimeoutMs: 1000,
      maxBatchOrders: 10,
    }, fetchMock);
    const endpoint = endpointCatalog.find(({ name }) => name === "pionex_account_get_balance")!;

    const result = await client.execute(endpoint, {});
    expect(result).toEqual({ result: true, data: { balances: [] } });
    const [url, init] = fetchMock.mock.calls[0]!;
    expect(String(url)).toContain("timestamp=1655896754515");
    expect((init?.headers as Record<string, string>)["PIONEX-KEY"]).toBe("key");
    expect((init?.headers as Record<string, string>)["PIONEX-SIGNATURE"]).toMatch(/^[a-f0-9]{64}$/);
  });
});
