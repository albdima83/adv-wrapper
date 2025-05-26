import { defineConfig } from "tsup";
import { version } from "./package.json";
import { execSync } from "child_process";
import * as fs from "fs";

export default defineConfig(() => {
	const now = new Date().toISOString();
	const commit =
		process.env.GIT_COMMIT ||
		process.env.CODEBUILD_RESOLVED_SOURCE_VERSION ||
		execSync("git rev-parse --short HEAD").toString().trim();
	const define = {
		"process.env": "{}",
		process: "{}",
		"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),
		"process.env.LOG_LEVEL": JSON.stringify(process.env.LOG_LEVEL || "error"),
		__VERSION__: `'${version}'`,
		__COMMIT__: `'${commit}'`,
	};

	return [
		{
			entry: ["src/ima3.ts"],
			format: ["esm", "iife"],
			outDir: "dist",
			target: "esnext",
			outExtension: ({ format }) => ({
				js: format === "esm" ? ".esm.js" : ".js",
			}),
			bundle: true,
			minify: true,
			define,
		},
	];
});
