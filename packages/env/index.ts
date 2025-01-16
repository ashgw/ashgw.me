import { config } from "dotenv";
import { z } from "zod";

import { createEnv } from "@ashgw/ts-env";

config({ path: require("path").resolve(__dirname, "../../.env") });

export const env = createEnv({
  vars: {
    NODE_ENV: z.enum(["production", "development", "preview"]),
    WWW_URL: z.string().url(),
    WWW_GOOGLE_ANALYTICS_ID: z.string().min(7).startsWith("G-"),
    BLOG_GOOGLE_ANALYTICS_ID: z.string().min(7).startsWith("G-"),
    BLOG_URL: z.string().url(),
  },
  disablePrefix: ["NODE_ENV"],
  prefix: "NEXT_PUBLIC",
  // @ts-expect-error skip in browser
  skipValidation: typeof window === "undefined" ? false : true,
});
