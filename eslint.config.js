import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Standard no-unused-vars rule - no exceptions
    },
  },
  {
    files: ["static/**/*.js"],
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
  },
  {
    ignores: ["dist/**", "node_modules/**"],
  },
);
