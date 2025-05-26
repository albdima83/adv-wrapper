import { defineConfig } from "vite";

export default defineConfig({
	base: process.env.BASE_URL || "/",
	build: {
		outDir: "dist",
		rollupOptions: {
			input: "index.html",
		},
	},
	define: {
		__IMA_LIB_URL__: JSON.stringify(process.env.IMA_LIB_URL || ""),
	},
});
