import { config as baseConfig } from "@carrot-cms/eslint-config/client";

/** @type {import("eslint").Linter.Config} */
const config = [
  ...baseConfig,
  {
    ignores: [".react-router", "dist", "node_modules"],
  },
];

export default config;
