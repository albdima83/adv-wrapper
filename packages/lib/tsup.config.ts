import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/ima3.ts"],
  format: ["iife", "cjs", "esm"],
  dts: true,
  clean: true,
  outDir: "dist",
  globalName: "google.ima",
  target: "es5",
  external: ["node:os", "node:path", "node:fs"],
  skipNodeModulesBundle: true,
  minify: true,
  outExtension({ format }) {
    return {
      js: format === "iife" ? ".js" : `.${format}.js`,
    };
  },
  define: {
    "process.env": "{}",
    process: "{}",
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "production"
    ),
    "process.env.LOG_LEVEL": JSON.stringify(process.env.LOG_LEVEL || "error"),
  },
});
