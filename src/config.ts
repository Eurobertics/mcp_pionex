export interface ServerConfig {
  apiBaseUrl: string;
  apiKey?: string | undefined;
  apiSecret?: string | undefined;
  requestTimeoutMs: number;
  allowedSymbols?: Set<string> | undefined;
  maxOrderQuoteAmount?: string | undefined;
  maxOrderBaseSize?: string | undefined;
  maxBatchOrders: number;
  maxBotInvestment?: string | undefined;
}

function optional(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

function positiveInteger(name: string, fallback: number): number {
  const raw = optional(name);
  if (!raw) return fallback;
  const value = Number(raw);
  if (!Number.isSafeInteger(value) || value <= 0) throw new Error(`${name} must be a positive integer`);
  return value;
}

export function loadConfig(): ServerConfig {
  const symbols = optional("PIONEX_ALLOWED_SYMBOLS");
  return {
    apiBaseUrl: optional("PIONEX_API_BASE_URL") ?? "https://api.pionex.com",
    apiKey: optional("PIONEX_API_KEY"),
    apiSecret: optional("PIONEX_API_SECRET"),
    requestTimeoutMs: positiveInteger("PIONEX_REQUEST_TIMEOUT_MS", 15_000),
    allowedSymbols: symbols ? new Set(symbols.split(",").map((item) => item.trim().toUpperCase()).filter(Boolean)) : undefined,
    maxOrderQuoteAmount: optional("PIONEX_MAX_ORDER_QUOTE_AMOUNT"),
    maxOrderBaseSize: optional("PIONEX_MAX_ORDER_BASE_SIZE"),
    maxBatchOrders: positiveInteger("PIONEX_MAX_BATCH_ORDERS", 10),
    maxBotInvestment: optional("PIONEX_MAX_BOT_INVESTMENT"),
  };
}
