import { defineConfig } from "tsup";
import { appendFileSync } from "fs";

export default defineConfig({
  entry: ["src/ima3.ts"],
  format: ["cjs", "esm", "iife"],
  dts: true,
  clean: true,
  outDir: "dist",
  globalName: "GoogleIma",
  target: "es5",
  external: ["node:os", "node:path", "node:fs"],
  minify: true,
  define: {
    "process.env": "{}",
    process: "{}",
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "production"
    ),
    "process.env.LOG_LEVEL": JSON.stringify(process.env.LOG_LEVEL || "error"),
  },
  outExtension({ format }) {
    return {
      js: format === "iife" ? ".js" : `.${format}.js`,
    };
  },
  onSuccess: (): Promise<void | (() => void | Promise<void>) | undefined> => {
    const code = `
    (function(){
      if (typeof window !== 'undefined') {
        window.google = window.google || {};
        window.google.ima = window.GoogleIma;
      }
    })();`;
    appendFileSync("dist/ima3.js", code);
    return Promise.resolve();
  },
});
