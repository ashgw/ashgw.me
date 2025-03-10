import tseslint from "typescript-eslint";

/**
 * Whenever`@ashgw/ts-env` is used, apply this rule
 */
export default tseslint.config(
  { ignores: ["**/env.ts"] },
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    rules: {
      "no-restricted-properties": [
        "error",
        {
          object: "process",
          property: "env",
          message:
            "Use `import { env } from '~/env'` or '@ashgw/env' instead to ensure validated types.",
        },
      ],
      "@typescript-eslint/consistent-type-imports": "error",
      "no-restricted-imports": [
        "error",
        {
          name: "process",
          importNames: ["env"],
          message:
            "Use `import { env } from '~/env'` or '@ashgw/env' instead to ensure validated types.",
        },
      ],
    },
  },
);
