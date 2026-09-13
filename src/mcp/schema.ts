import { z } from "zod";
import type { JsonSchema } from "../catalog/types.js";

export function jsonSchemaToZod(schema: JsonSchema): z.ZodTypeAny {
  let result: z.ZodTypeAny;

  if (schema.const !== undefined) {
    result = z.literal(schema.const as string | number | boolean | null);
  } else if (schema.enum?.length) {
    const variants = schema.enum.map((value) => z.literal(value as string | number | boolean | null));
    result = variants.length === 1 ? variants[0]! : z.union(variants as unknown as [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]);
  } else if (schema.oneOf?.length || schema.anyOf?.length) {
    const variants = (schema.oneOf ?? schema.anyOf ?? []).map(jsonSchemaToZod);
    result = variants.length === 1 ? variants[0]! : z.union(variants as [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]);
  } else if (schema.allOf?.length) {
    result = schema.allOf.map(jsonSchemaToZod).reduce((left, right) => z.intersection(left, right));
  } else {
    const type = Array.isArray(schema.type) ? schema.type.find((item) => item !== "null") : schema.type;
    switch (type) {
      case "object": {
        const required = new Set(schema.required ?? []);
        const shape: Record<string, z.ZodTypeAny> = {};
        for (const [name, child] of Object.entries(schema.properties ?? {})) {
          const converted = jsonSchemaToZod(child);
          shape[name] = required.has(name) ? converted : converted.optional();
        }
        result = schema.additionalProperties === true ? z.object(shape).catchall(z.unknown()) : z.object(shape).strict();
        break;
      }
      case "array":
        result = z.array(jsonSchemaToZod(schema.items ?? {}));
        break;
      case "integer":
        result = z.number().int();
        break;
      case "number":
        result = z.number();
        break;
      case "boolean":
        result = z.boolean();
        break;
      case "string":
        result = z.string();
        break;
      default:
        result = z.unknown();
    }
  }

  if (result instanceof z.ZodString) {
    let constrained = result;
    if (schema.minLength !== undefined) constrained = constrained.min(schema.minLength);
    if (schema.maxLength !== undefined) constrained = constrained.max(schema.maxLength);
    if (schema.pattern) constrained = constrained.regex(new RegExp(schema.pattern));
    result = constrained;
  } else if (result instanceof z.ZodNumber) {
    let constrained = result;
    if (schema.minimum !== undefined) constrained = constrained.min(schema.minimum);
    if (schema.maximum !== undefined) constrained = constrained.max(schema.maximum);
    result = constrained;
  } else if (result instanceof z.ZodArray) {
    let constrained = result;
    if (schema.minItems !== undefined) constrained = constrained.min(schema.minItems);
    if (schema.maxItems !== undefined) constrained = constrained.max(schema.maxItems);
    result = constrained;
  }
  if (schema.description) result = result.describe(schema.description);
  if (schema.nullable || (Array.isArray(schema.type) && schema.type.includes("null"))) result = result.nullable();
  if (schema.default !== undefined) result = result.default(schema.default);
  return result;
}
