export class PionexError extends Error {
  constructor(
    message: string,
    readonly details: {
      httpStatus?: number;
      code?: string | number;
      retryable: boolean;
      response?: unknown;
    },
  ) {
    super(message);
    this.name = "PionexError";
  }

  toJSON(): Record<string, unknown> {
    return { error: this.name, message: this.message, ...this.details };
  }
}
