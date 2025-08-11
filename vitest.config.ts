import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    coverage: {
      include: ["src/**/*"],
      exclude: [
        "static/**/*",
        "**/*.d.ts",
        "src/test/**/*",
        "src/**/*.test.tsx",
      ],
      thresholds: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90,
      },
      reporter: ["text", "json", "html"],
    },
  },
});
