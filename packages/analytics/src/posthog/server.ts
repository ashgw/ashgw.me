import "server-only";

import { PostHog } from "posthog-node";

import { env } from "@ashgw/env";

export const posthogNode = new PostHog(env.NEXT_PUBLIC_POSTHOG_KEY, {
  host: env.NEXT_PUBLIC_POSTHOG_HOST,
  // Don't batch events and flush immediately - we're running in a serverless environment
  flushAt: 1,
  flushInterval: 0,
});
