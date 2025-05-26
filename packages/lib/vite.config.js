import { defineConfig } from 'vite';
import { version } from "./package.json";
import { execSync } from "child_process";

function addBannerFooter({ header = '', footer = '', banner = (format) => "" }) {
    return {
        name: 'add-banner-footer',
        generateBundle(options, bundle) {
            const format = options.format;
            for (const file of Object.values(bundle)) {
                if (file.type === 'chunk') {
                    const b = banner(format) ?? "";
                    const h = header.replace('[format]', format.toUpperCase());
                    file.code = `${h}\n${file.code}\n${b}\n${footer}`;
                }
            }
        }
    };
}

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

    return {
        build: {
            define,
            emptyOutDir: true,
            lib: {
                entry: 'src/ima3.ts',
                name: 'GoogleIma',
                formats: ['umd', 'es', 'cjs'],
                fileName: (format) => (format === "umd") ? `ima3.js` : `ima3.${format}.js`,
            },
            rollupOptions: {
                output: {
                    inlineDynamicImports: true,
                    globals: {
                    },
                },
            },

            target: 'es2015',
        },
        plugins: [
            addBannerFooter({
                header: `/* [format] | Version: ${version} | Commit: ${commit} */`,
                footer: `/* Built on ${now} */`,
                banner: (format) => (format === "umd") ? `(function(){
                    if (typeof window !== 'undefined') {
                    window.google = window.google || {};
                    window.google.ima = window.GoogleIma;
                    }
                })();` : "",
            }),
        ],
    }
});