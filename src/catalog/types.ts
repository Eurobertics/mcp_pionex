export type HttpMethod = "GET" | "POST" | "DELETE" | "PUT";

export interface JsonSchema {
  type?: string | string[];
  description?: string;
  default?: unknown;
  enum?: unknown[];
  const?: unknown;
  format?: string;
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  minItems?: number;
  maxItems?: number;
  pattern?: string;
  properties?: Record<string, JsonSchema>;
  required?: string[];
  items?: JsonSchema;
  oneOf?: JsonSchema[];
  anyOf?: JsonSchema[];
  allOf?: JsonSchema[];
  additionalProperties?: boolean | JsonSchema;
  nullable?: boolean;
  [key: string]: unknown;
}

export interface EndpointDefinition {
  name: string;
  title: string;
  description: string;
  category: "trade" | "wallet" | "bot" | "earn" | "earn_dual";
  method: HttpMethod;
  path: string;
  authenticated: boolean;
  destructive: boolean;
  weight: number;
  inputSchema: JsonSchema;
  queryParameters: string[];
  bodyParameters: string[];
}
