import path from "path";
import type { Keys, UnionToTuple } from "ts-roids";
import { config } from "dotenv";
import { z } from "zod";

import { createEnv } from "@ashgw/ts-env";

config({
  path: path.resolve(
    __dirname,
    process.env.NODE_ENV === "production"
      ? "../../.env.production"
      : "../../.env.development",
  ),
});

const isBrowser = typeof window !== "undefined";

const nonPrefixedVars = {
  NODE_ENV: z.enum(["production", "development", "preview", "test"]),
  SENTRY_ORG: z.string(),
  SENTRY_PROJECT: z.string(),
  NEXT_RUNTIME: z.enum(["nodejs", "edge"]).optional(),
  SENTRY_AUTH_TOKEN: z.string().min(20),
} as const;

type NonPrefixedVars = typeof nonPrefixedVars;

const NonPrefixedVarsTuple = Object.keys(nonPrefixedVars) as UnionToTuple<
  Keys<NonPrefixedVars>
>;

export const env = createEnv({
  vars: {
    ...nonPrefixedVars,
    SENTRY_DSN: z.string().url(),
    WWW_URL: z.string().url(),
    BLOG_URL: z.string().url(),
    WWW_GOOGLE_ANALYTICS_ID: z.string().min(7).startsWith("G-"),
    BLOG_GOOGLE_ANALYTICS_ID: z.string().min(7).startsWith("G-"),
    POSTHOG_KEY: z.string().min(20).startsWith("phc_"),
    POSTHOG_HOST: z.string().url(),
  },
  disablePrefix: [...NonPrefixedVarsTuple],
  prefix: "NEXT_PUBLIC",
  runtimeEnv: {
    NEXT_PUBLIC_WWW_GOOGLE_ANALYTICS_ID:
      process.env.NEXT_PUBLIC_WWW_GOOGLE_ANALYTICS_ID,
    NEXT_PUBLIC_BLOG_GOOGLE_ANALYTICS_ID:
      process.env.NEXT_PUBLIC_BLOG_GOOGLE_ANALYTICS_ID,
    NEXT_PUBLIC_WWW_URL: process.env.NEXT_PUBLIC_WWW_URL,
    NEXT_PUBLIC_BLOG_URL: process.env.NEXT_PUBLIC_BLOG_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  },
  skipValidation: isBrowser, // Since env vars are already injected at build time, we don't need to validate them at runtime.
});
