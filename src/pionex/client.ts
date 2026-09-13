import type { EndpointDefinition } from "../catalog/types.js";
import type { ServerConfig } from "../config.js";
import { serializeQueryValue, signRequest } from "./auth.js";
import { PionexError } from "./errors.js";
import { WeightedRateLimiter } from "./rate-limiter.js";

export class PionexClient {
  private readonly ipLimiter = new WeightedRateLimiter();
  private readonly accountLimiter = new WeightedRateLimiter();

  constructor(private readonly config: ServerConfig, private readonly fetchImplementation: typeof fetch = fetch) {}

  async execute(endpoint: EndpointDefinition, args: Record<string, unknown>): Promise<unknown> {
    const query: Record<string, unknown> = {};
    const body: Record<string, unknown> = {};
    for (const name of endpoint.queryParameters) if (args[name] !== undefined) query[name] = args[name];
    for (const name of endpoint.bodyParameters) {
      if (name === "body" && args.body && typeof args.body === "object") Object.assign(body, args.body);
      else if (args[name] !== undefined) body[name] = args[name];
    }

    const headers: Record<string, string> = { Accept: "application/json" };
    const bodyText = endpoint.bodyParameters.length ? JSON.stringify(body) : "";
    if (bodyText) headers["Content-Type"] = "application/json";

    if (endpoint.authenticated) {
      if (!this.config.apiKey || !this.config.apiSecret) {
        throw new PionexError("This tool requires PIONEX_API_KEY and PIONEX_API_SECRET", { retryable: false });
      }
      query.timestamp = Date.now();
      headers["PIONEX-KEY"] = this.config.apiKey;
      headers["PIONEX-SIGNATURE"] = signRequest(endpoint.method, endpoint.path, query, bodyText, this.config.apiSecret);
    }

    await this.ipLimiter.acquire(endpoint.weight);
    if (endpoint.authenticated) await this.accountLimiter.acquire(endpoint.weight);

    const url = new URL(endpoint.path, this.config.apiBaseUrl);
    for (const [key, value] of Object.entries(query).sort(([left], [right]) => left.localeCompare(right))) {
      if (value !== undefined && value !== null) url.searchParams.append(key, serializeQueryValue(value));
    }

    let response: Response;
    try {
      const requestInit: RequestInit = {
        method: endpoint.method,
        headers,
        signal: AbortSignal.timeout(this.config.requestTimeoutMs),
      };
      if (bodyText) requestInit.body = bodyText;
      response = await this.fetchImplementation(url, requestInit);
    } catch (cause) {
      throw new PionexError(`Pionex request failed: ${cause instanceof Error ? cause.message : String(cause)}`, {
        retryable: endpoint.method === "GET",
      });
    }

    const text = await response.text();
    let payload: unknown;
    try {
      payload = text ? JSON.parse(text) : null;
    } catch {
      payload = text;
    }

    const record = payload && typeof payload === "object" ? payload as Record<string, unknown> : undefined;
    if (!response.ok || record?.result === false) {
      const code = record?.code as string | number | undefined;
      const message = typeof record?.message === "string" ? record.message : `Pionex returned HTTP ${response.status}`;
      const details: ConstructorParameters<typeof PionexError>[1] = {
        httpStatus: response.status,
        retryable: endpoint.method === "GET" && (response.status === 408 || response.status === 429 || response.status >= 500),
        response: payload,
      };
      if (code !== undefined) details.code = code;
      throw new PionexError(message, details);
    }
    return payload;
  }
}

export interface PionexExecutor {
  execute(endpoint: EndpointDefinition, args: Record<string, unknown>): Promise<unknown>;
}
