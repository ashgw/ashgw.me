import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url);

const baseConfig = jiti("@ashgw/next-config/base.js");
const { sentry } = jiti("@ashgw/observability");

jiti("@ashgw/env");

const config = sentry.next.withConfig({
  /** @type {import('next').NextConfig} */
  nextConfig: {
    ...baseConfig,
    experimental: {
      outputFileTracingIncludes: {
        "/": ["./public/**/*"],
      },
      esmExternals: "loose",
      productionBrowserSourceMaps: true,
      pageExtensions: ["js", "ts", "jsx", "tsx", "mdx"],
    },
    transpilePackages: ["next-mdx-remote"],
  },
});

export default config;
