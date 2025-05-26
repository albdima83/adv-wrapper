import { ConfigEnv, defineConfig, loadEnv } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { version } from "./package.json";

export default defineConfig((config: ConfigEnv) => {
	const mode = config.mode || "development";
	const define = loadEnv(mode, process.cwd(), "");
	return {
		base: define.BASE_URL || "/",
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
			__IMA_LIB_URL__: JSON.stringify(define.IMA_LIB_URL || ""),
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
							value: `${define.IMA_LIB_URL}`,
						},
						{
							name: "baseUrl",
							value: `${define.BASE_URL}`,
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
