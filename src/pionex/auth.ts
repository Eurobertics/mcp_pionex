import { createHmac } from "node:crypto";

export function serializeQueryValue(value: unknown): string {
  if (Array.isArray(value)) return value.join(",");
  if (typeof value === "boolean") return value ? "true" : "false";
  return String(value);
}

export function canonicalQuery(parameters: Record<string, unknown>): string {
  return Object.entries(parameters)
    .filter(([, value]) => value !== undefined && value !== null)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}=${serializeQueryValue(value)}`)
    .join("&");
}

export function signRequest(method: string, path: string, query: Record<string, unknown>, bodyText: string, secret: string): string {
  const queryText = canonicalQuery(query);
  const body = method === "GET" ? "" : bodyText;
  return createHmac("sha256", secret).update(`${method.toUpperCase()}${path}?${queryText}${body}`).digest("hex");
}
