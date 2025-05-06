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
		// ESM
		{
			entry: ["src/ima3.ts"],
			format: ["esm"],
			outDir: "dist",
			target: "esnext",
			outExtension: () => ({ js: ".esm.js" }),
			bundle: true,
			minify: true,
			define,
			banner: {
				js: `/* ESM | Version: ${version} | Commit: ${commit} */`,
			},
			footer: {
				js: `/* Built on ${now} */`,
			},
		},
		// CJS
		{
			entry: ["src/ima3.ts"],
			format: ["cjs"],
			outDir: "dist",
			target: "node14",
			outExtension: () => ({ js: ".esm.cjs" }),
			bundle: true,
			minify: true,
			define,
			banner: {
				js: `/* CJS | Version: ${version} | Commit: ${commit} */`,
			},
			footer: {
				js: `/* Built on ${now} */`,
			},
		},
		// IIFE
		{
			entry: ["src/ima3.ts"],
			format: ["iife"],
			outDir: "dist",
			globalName: "GoogleIma",
			target: "es5",
			outExtension: () => ({ js: ".js" }),
			bundle: true,
			minify: true,
			define,
			footer: {
				js: `
      (function(){
        if (typeof window !== 'undefined') {
          window.google = window.google || {};
          window.google.ima = window.GoogleIma;
        }
      })();`,
			},
			onSuccess: () => {
				const file = "dist/ima3.js"; // Adjust path as needed
				const code = fs.readFileSync(file, "utf8");
				fs.writeFileSync(
					file,
					`/* UMD | Version: ${version} | Commit: ${commit} */\n${code}\n/* Built on ${now} */`,
					"utf8",
				);
				return Promise.resolve();
			},
		},
	];
});
