import { describe, expect, it } from "vitest";
import { endpointCatalog } from "../src/catalog/endpoints.generated.js";

describe("generated endpoint catalog", () => {
  it("contains all selected official API groups with unique MCP names", () => {
    expect(endpointCatalog).toHaveLength(70);
    expect(new Set(endpointCatalog.map(({ name }) => name)).size).toBe(endpointCatalog.length);
    expect(new Set(endpointCatalog.map(({ category }) => category))).toEqual(new Set(["trade", "wallet", "bot", "earn", "earn_dual"]));
  });

  it("contains important operations missing from the old Ember implementation", () => {
    const names = new Set(endpointCatalog.map(({ name }) => name));
    expect(names).toContain("pionex_market_get_symbol_info");
    expect(names).toContain("pionex_orders_new_multiple_orders");
    expect(names).toContain("pionex_bot_create_spot_grid_order");
    expect(names).toContain("pionex_earn_dual_invest");
  });

  it("keeps the authentication timestamp internal", () => {
    for (const endpoint of endpointCatalog) {
      expect(endpoint.queryParameters).not.toContain("timestamp");
      expect(endpoint.inputSchema.required).not.toContain("timestamp");
    }
  });
});
