export class WeightedRateLimiter {
  private readonly requests: Array<{ at: number; weight: number }> = [];
  private queue: Promise<void> = Promise.resolve();

  constructor(private readonly limit = 10, private readonly windowMs = 1_000) {}

  acquire(weight: number): Promise<void> {
    const task = this.queue.then(() => this.waitForCapacity(Math.max(1, weight)));
    this.queue = task.catch(() => undefined);
    return task;
  }

  private async waitForCapacity(weight: number): Promise<void> {
    if (weight > this.limit) throw new Error(`Request weight ${weight} exceeds limiter capacity ${this.limit}`);
    while (true) {
      const now = Date.now();
      while (this.requests[0] && now - this.requests[0].at >= this.windowMs) this.requests.shift();
      const used = this.requests.reduce((total, request) => total + request.weight, 0);
      if (used + weight <= this.limit) {
        this.requests.push({ at: now, weight });
        return;
      }
      const delay = Math.max(1, this.windowMs - (now - this.requests[0]!.at));
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}
