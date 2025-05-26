import { ConfigEnv, defineConfig, loadEnv } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { version } from "./package.json";

export default defineConfig((config: ConfigEnv) => {
	const mode = config.mode || "development";
	const env = loadEnv(mode, process.cwd(), "VITE_");
	const baseUrl = env.VITE_BASE_URL || "/";
	const imaLibUrl = env.VITE_IMA_LIB_URL || "";
	return {
		base: baseUrl,
		build: {
			outDir: "dist",
			rollupOptions: {
				input: "index.html",
				output: {
					entryFileNames: "assets/js/[name]-[hash].js",
					chunkFileNames: "assets/js/[name]-[hash].js",
					assetFileNames: "assets/[ext]/[name]-[hash][extname]",
				},
			},
		},
		define: {
			__IMA_LIB_URL__: JSON.stringify(imaLibUrl),
		},
		plugins: [
			ViteEjsPlugin(
				{
					meta: [
						{
							name: "enviroment",
							value: `${mode}`,
						},
						{
							name: "version",
							value: `${version}`,
						},
						{
							name: "imaLib",
							value: `${imaLibUrl}`,
						},
						{
							name: "baseUrl",
							value: `${baseUrl}`,
						},
					],
				},
				{
					ejs: {
						beautify: true,
					},
				},
			),
		],
	};
});
