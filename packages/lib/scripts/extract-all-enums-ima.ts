import puppeteer from "puppeteer";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function sanitizeEnumName(path: string): string {
	return path.replace(/\./g, "_");
}

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	// Load IMA SDK
	await page.goto("about:blank");
	await page.evaluate(
		() =>
			new Promise<void>((resolve) => {
				const script = document.createElement("script");
				script.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
				script.onload = () => resolve();
				document.head.appendChild(script);
			}),
	);

	// Extract enums from google.ima
	const enums = await page.evaluate(() => {
		function isLikelyEnum(obj: unknown): boolean {
			if (typeof obj !== "object" || obj === null) return false;

			const keys = Object.keys(obj);
			if (keys.length === 0) return false;

			const sampleKeys = keys.slice(0, 10);

			return sampleKeys.every((key) => {
				const val = obj[key];
				return typeof val === "string" || typeof val === "number";
			});
		}

		const results: Record<string, Record<string, string | number>> = {};

		function traverse(obj: unknown, prefix: string) {
			const tObj = obj || {};
			for (const key in tObj) {
				try {
					const value = tObj[key];
					const fullPath = `${prefix}.${key}`;

					if (isLikelyEnum(value)) {
						results[fullPath] = value;
					} else if (typeof value === "object" && value !== null) {
						traverse(value, fullPath);
					}
				} catch (e) {
					console.error(e);
					continue;
				}
			}
		}
		traverse((window as unknown as { google: { ima: unknown } }).google.ima, "google.ima");
		return results;
	});

	await browser.close();

	// Output directory
	const outDir = path.resolve(__dirname, "../src/generated");
	fs.mkdirSync(outDir, { recursive: true });

	// Generate enums
	const indexLines: string[] = [];

	for (const [fullPath, members] of Object.entries(enums)) {
		const enumName = sanitizeEnumName(fullPath);
		const enumLines: string[] = [];

		// Add a banner comment referencing the original source
		enumLines.push(`/** Auto-generated from @type {${fullPath}} */`);
		enumLines.push(`export enum ${enumName} {`);

		const addedKeys = new Set<string>();

		for (const [key, value] of Object.entries(members)) {
			if (!isNaN(Number(key))) continue; // Skip numeric reverse mappings
			if (addedKeys.has(key)) continue;
			addedKeys.add(key);

			const val = typeof value === "string" ? `"${value}"` : value;
			enumLines.push(`  ${key} = ${val},`);
		}

		enumLines.push("}");

		const filePath = path.join(outDir, `${enumName}.ts`);
		fs.writeFileSync(filePath, enumLines.join("\n"), "utf-8");
		indexLines.push(`export * from './${enumName}';`);
	}

	// Write index file
	fs.writeFileSync(path.join(outDir, "index.ts"), indexLines.join("\n"), "utf-8");

	console.log(`✅ Extracted ${Object.keys(enums).length} enums from google.ima`);
})();
