import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const memoryLog = new Map<string, { count: number; resetAt: number }>();
const memoryLimit = 5;
const memoryWindowMs = 10 * 60 * 1000;

const upstashUrl = process.env.UPSTASH_REDIS_REST_URL;
const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;
const persistentLimiter = upstashUrl && upstashToken
  ? new Ratelimit({
      redis: new Redis({ url: upstashUrl, token: upstashToken }),
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      analytics: false,
      prefix: "entelechae:subscribe",
    })
  : null;

export async function checkSubscriptionRateLimit(identifier: string) {
  if (persistentLimiter) {
    const result = await persistentLimiter.limit(identifier);
    return { success: result.success, reset: result.reset };
  }

  const now = Date.now();
  const previous = memoryLog.get(identifier);
  const current = previous && previous.resetAt > now
    ? previous
    : { count: 0, resetAt: now + memoryWindowMs };

  if (current.count >= memoryLimit) {
    return { success: false, reset: current.resetAt };
  }

  current.count += 1;
  memoryLog.set(identifier, current);
  return { success: true, reset: current.resetAt };
}
