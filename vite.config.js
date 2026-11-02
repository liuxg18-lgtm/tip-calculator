import { defineConfig } from "vite";

export default defineConfig({
  root: "cursor-activities/tip-calculator",
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port: 43127,
    strictPort: true,
  },
});
