import baseConfig from "@ashgw/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**", "src/generated/**"],
  },
  ...baseConfig,
];
