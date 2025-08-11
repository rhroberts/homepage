import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  publicDir: "../static",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    // Configure proper MIME types for font files
    middlewareMode: false,
    headers: {
      // This won't work for static files, need different approach
    },
  },
  // Ensure fonts are treated as assets
  assetsInclude: ["**/*.otf", "**/*.woff", "**/*.woff2", "**/*.ttf"],
});
