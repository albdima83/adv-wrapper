import legacy from "@vitejs/plugin-legacy";
import fs from "fs";
import path from "path";
import type { PreRenderedAsset } from "rollup";
import type { ConfigEnv, UserConfig } from "vite";
import { loadEnv } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import solidPlugin from "vite-plugin-solid";
import type { Target } from "vite-plugin-static-copy";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tsconfigPaths from "vite-tsconfig-paths";
import type { CustomBuildConf, PlatformTypeVariant } from "../shared/types/build.js";
import { MODULE_BUILD_CONFS } from "./buildconf/index.js";
import { version } from "./package.json";
import ViteBabelPlugin from "./vite/plugins/vite-plugin-babel.js";
import ViteInjectScriptPlugin from "./vite/plugins/vite-plugin-inject-script.js";
import ViteMultiPlatformIndexPlugin from "./vite/plugins/vite-plugin-multiplatform-index.js";

const APP_VERSION = version ?? "undefined";

const APP_DEFAULT_FLAGS: ApplicationFeatureFlags = {
	APP_DEVICE_LOW_MEMORY: false,
	APP_DISABLE_ADS: false,
	APP_DISABLE_ANIMATIONS: false,
	APP_DISABLE_CIRCULARITY: false,
	APP_DISABLE_IMAGES_PIXEL_DENSITY: false,
	APP_DISABLE_NAVIGATION: false,
	APP_DISABLE_PIXEL_RATIO: false,
	APP_DISABLE_PREVIEW_PLAYER: false,
	APP_DISABLE_THROTTLE: false,
	APP_DISABLE_WEBGL: false,
	APP_ENABLE_ACTIVE_ELEMENT_DEBUG: false,
	APP_ENABLE_CAROUSEL_RECYCLING: false,
	APP_ENABLE_DEBUG: false,
	APP_ENABLE_DEBUG_OVERLAY: false,
	APP_ENABLE_DEVTOOLS: false,
	APP_ENABLE_IMAGE_WORKER: true,
	APP_ENABLE_INSPECTOR: false,
	APP_ENABLE_MAGIC_REMOTE: false,
	APP_ENABLE_PAGE_TRANSLATION: false,
	APP_ENABLE_PROXY_IMAGE: false,
	APP_ENABLE_SDF_FONTS: true,
	APP_ENTER_KEYUP: true,
	APP_FORCE_PLAYER_ASSETTYPE: false,
	APP_FORCE_WEBGL2: false,
	APP_SLOW_ANIMATIONS: false,
};

const APP_DEFAULT_ENVIROMENT: ApplicationSettingsFlags & ApplicationEnviroment & BuildEnvironment = {
	APP_NAME: "Mediaset Infinity",
	APP_STORAGE_PREFIX: "mplay_ctv",
	APP_STAGE: "dev",
	APP_VERSION,
	APP_LANGUAGE: "it",
	APP_CTV_PLATFORM: "BROWSER",
	BUMPER_URL: "https://static1.mediasetplay.mediaset.it/common/ctv/bumper.mp4",
	BUMPER_ENABLED: true,
	APP_CTV_PLATFORM_VARIANT: "",
	APP_REMOTE_CONFIG_API_KEY: "",
	APP_REMOTE_CONFIG_AUTH_DOMAIN: "",
	APP_REMOTE_CONFIG_PROJECT_ID: "",
	APP_REMOTE_CONFIG_APP_ID: "",
	APP_URL_REMOTE_CONFIG: "",
	APP_BASE_URL_PROMOCODE: undefined,
	APP_BASE_URL: "",
	APP_CMP_TYPE: "iubenda",
	APP_ADS_TYPE: "freewheel",
	APP_USER_INACTIVE_TIMEOUT_SEC: "300",
	APP_PLAYER_HIDE_UI_TIMEOUT_SEC: "4",
	APP_PLAYER_NEXT_EPISODE_TIMEOUT_SEC: "5",
	APP_MAX_IMAGE_DENSITY: "3",
	SENTRY_API_KEY: undefined,
	SENTRY_ENABLED: "false",
	SENTRY_DSN: undefined,
	SENTRY_PROJECT_ID: undefined,
	TENANT: "ita",
	PROPERTY: "MPLAY",
	APP_DIDOMI_SDK_URL: "",
	APP_DIDOMI_API_KEY: "",
	APP_DIDOMI_NOTICE_ID: "",
};

const APP_DEFAULT_ENVS = { ...APP_DEFAULT_ENVIROMENT, ...APP_DEFAULT_FLAGS };

const defineConfigBuildPlatform = async (
	config: ConfigEnv,
	platform?: PlatformTypeVariant | undefined,
): Promise<CustomBuildConf.BuildConf> => {
	if (!platform) {
		return {};
	}

	const importModule = MODULE_BUILD_CONFS[platform];
	try {
		const dynamicImport = await importModule;
		return dynamicImport?.default(config) ?? {};
	} catch (err) {
		console.error(`Failed to load platform build [${platform}]`);
		console.log(err);
	}
	return {};
};
const getStaticPlatformPath = async (platform?: PlatformType | undefined): Promise<string | undefined> => {
	if (!platform) {
		return undefined;
	}
	const staticPath = path.resolve(__dirname, `./buildConf/${platform.toLowerCase()}/static`);
	if (fs.existsSync(staticPath)) {
		return staticPath;
	}
	return undefined;
};

const folderExistsAndNotEmpty = (folderPath: string): boolean => {
	try {
		// Check if the folder exists
		if (!fs.existsSync(folderPath)) {
			console.log(`Folder does not exist: ${folderPath}`);
			return false;
		}

		// Check if the path is a directory
		const stats = fs.statSync(folderPath);
		if (!stats.isDirectory()) {
			console.log(`Path is not a folder: ${folderPath}`);
			return false;
		}

		// Read the contents of the folder
		const files = fs.readdirSync(folderPath);
		if (files.length === 0) {
			console.log(`Folder is empty: ${folderPath}`);
			return false;
		}

		// Folder exists and is not empty
		return true;
	} catch (error) {
		console.error(`Error checking folder: ${error}`);
		return false;
	}
};

const getAlias = (config: ApplicationConfig): Record<string, string | boolean> => {
	const additionalAliases: Record<string, string | boolean> = {};
	if (config.APP_DISABLE_ADS || config.APP_ADS_TYPE?.toLowerCase() !== "freewheel") {
		additionalAliases["fw-jsam"] = path.join(__dirname, "./vendor/empty.js");
		additionalAliases["fw-dashjs"] = path.join(__dirname, "./vendor/empty.js");
	} else {
		additionalAliases["fw-jsam"] = path.join(__dirname, "./vendor/fw-jsam/release/AdManager.js");
		additionalAliases["fw-dashjs"] = path.join(__dirname, "./vendor/fw-dashjs/dash.mediaplayer.min.js");
	}
	return additionalAliases;
};

const ASSETS_COPY: Array<Target> = [];

export const viteCommonConfig = async (config: ConfigEnv): Promise<UserConfig> => {
	console.log(`config.mode: [${config.mode}] [${config.command}]`);
	const isServe = config.command === "serve";
	const isDevelopment = config.mode === "development";
	const isStorybookBuild = process.env["STORYBOOK"] === "true";
	const tenant = process.env["TENANT"] || "ita";
	let platform: PlatformType | `${PlatformType}:${string}` = process.env.APP_CTV_PLATFORM ?? "BROWSER";

	if (isStorybookBuild) {
		console.log("Is Storybook Build");
	}

	const envsFolder = path.resolve(__dirname, "envs");
	let envsTenantFolder = envsFolder;
	let envsPlatformFolder;

	const envDirTenant = path.resolve(envsFolder, tenant);
	if (folderExistsAndNotEmpty(envDirTenant)) {
		envsTenantFolder = envDirTenant;
	}

	const envDirPlatform = path.resolve(envsTenantFolder, platform.toLocaleLowerCase().replace(":", "_"));
	if (folderExistsAndNotEmpty(envDirPlatform)) {
		envsPlatformFolder = envDirPlatform;
	}

	const envMode = isStorybookBuild ? "storybook" : config.mode;

	// NOTE .env.development values override .env.storybook values
	const processEnv = config.mode
		? {
				...loadEnv(envMode, envsTenantFolder, ""),
				...(envsPlatformFolder && loadEnv(envMode, envsPlatformFolder, "")),
				...loadEnv("", path.resolve(__dirname, "envs"), ""),
			}
		: import.meta.env;

	const platformBuildConfig = (await defineConfigBuildPlatform(config, platform)) ?? {};

	const platformVariant = platform.split(":")[1];
	platform = platform.split(":")[0] as PlatformType;

	const envs = { ...APP_DEFAULT_ENVS };
	for (const key of Object.keys(APP_DEFAULT_ENVIROMENT)) {
		if (typeof processEnv[key] !== "undefined") {
			//@ts-ignore
			envs[key] = processEnv[key];
		}
	}
	// TODO: This is triack to disable CMP for Mitele during integrate diadomi
	// in this case we force for all Italian platforms to use the iubends
	envs.APP_CMP_TYPE = envs.APP_CMP_TYPE ?? "iubenda";
	envs.APP_ADS_TYPE = envs.TENANT === "esp" ? "ima" : "freewheel";
	envs.APP_CTV_PLATFORM = platform;
	envs.APP_CTV_PLATFORM_VARIANT = platformVariant ?? "";

	// @ts-ignore
	if (platform === "TIM") {
		envs.APP_CTV_PLATFORM = "ANDROIDTV";
		platform = "ANDROIDTV";
	}

	const define: ApplicationConfig = {
		...APP_DEFAULT_ENVS,
		...envs,
		...(platformBuildConfig.buildAppFeatureFlagsEnvs ?? {}),
		...(platformBuildConfig.buildSettingsEnvs ?? {}),
	};

	if (isServe) {
		for (const key of Object.keys(APP_DEFAULT_FLAGS)) {
			if (processEnv[key]) {
				//@ts-ignore
				define[key] = JSON.parse(processEnv[key]);
			}
		}
	}

	define.APP_IS_SERVE = !!isServe;
	define.APP_IS_BUILD = !isServe;

	console.log("ENVs");
	console.log(define);
	const staticPlatformPath: string | undefined = await getStaticPlatformPath(platform);
	const externalAlias = getAlias(define);

	if (staticPlatformPath) {
		ASSETS_COPY.push({
			src: `${staticPlatformPath}/*`,
			dest: path.resolve(__dirname, "./dist"),
		});
	}

	if (isServe) {
		ASSETS_COPY.push({
			src: path.resolve(__dirname, "../shared/assets"),
			dest: path.resolve(__dirname, "./dist"),
		});
	}

	const cmpType = envs.APP_CMP_TYPE ?? "iubenda";

	const defConfig: UserConfig = {
		base: define.APP_BASE_URL ?? "./",
		publicDir: "static",
		envDir: "envs",
		resolve: {
			dedupe: [
				"solid-js",
				"@lightningjs/renderer",
				"@lightningtv/core",
				"@lightningtv/solid",
				"@lightningtv/solid/primitives",
				"@mds-bd/rti-lab-analytics-kit-js",
				"@mds-bd/rti-lab-ovp-kit-js",
				"@mds-bd/rti-lab-ctv-player",
				"@mds-bd/rti-lab-player-utils",
				"@mds-bd+definitions",
				"react",
				"react-dom",
			],
			alias: {
				// Alias for code
				theme: path.resolve(__dirname, "./src/mds-theme.ts"),
				...externalAlias,
			},
		},
		optimizeDeps: {
			include: [],
			exclude: [
				"@lightningtv/core",
				"@lightningtv/solid",
				"@lightningtv/solid/primitives",
				"@lightningjs/renderer/core",
				"@lightningjs/renderer/workers/renderer",
			],
		},
		build: {
			emptyOutDir: true,
			outDir: "./dist",
			minify: !isServe ? "terser" : false,
			sourcemap: isServe,
			manifest: true,
			modulePreload: {
				polyfill: !isServe,
			},
			rollupOptions: {
				input: ["./index.html", "./src/bumper.ts"],
				output: {
					entryFileNames: (chunkInfo) =>
						isServe || chunkInfo.name.includes("bumper") ? "[name].js" : "[name]-[hash].js",
					assetFileNames: (assetInfo: PreRenderedAsset) => {
						let folder = "";
						if (assetInfo.name) {
							if (["it.json", "es.json"].includes(assetInfo.name)) {
								folder = "translations/";
							} else if (/msdf\.(json|png)$/i.test(assetInfo.name)) {
								folder = "fonts/";
							} else {
								const extType = assetInfo.name.split(".").at(1);
								if (extType && /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
									folder = "images/";
								}
							}
						}

						return `assets/${folder}[name]-[hash][extname]`;
					},
					manualChunks: (id: string) => {
						/**
						 * @see https://github.com/vitejs/vite/discussions/5793
						 */
						if (id.includes("vite/preload-helper") || id.includes("vite/modulepreload-polyfill")) {
							return "preloadHelper";
						}
						if (id.includes("plugin-vue:export-helper")) {
							return "exportHelper";
						}
						if (id.includes("commonjsHelpers.js")) {
							return "commonjsHelper";
						}

						/**
						 * For firebase
						 */
						if (
							id.includes("firebase/app") ||
							id.includes("firebase/auth") ||
							id.includes("firebase/analytics") ||
							id.includes("firebase/remote-config") ||
							id.includes("firebase/logger") ||
							id.includes("firebase/util") ||
							id.includes("firebase/installations")
						) {
							return "mds-bd-firebase";
						}

						if (id.includes("@sentry")) {
							return "sentry";
						}

						if (id.includes("@mds-bd/ctv-kraken")) {
							if (define.APP_CTV_PLATFORM === "MULTIPLATFORM") {
								const regex = /(@mds-bd\/ctv-kraken-[^/]+)/;
								const match = id.match(regex) || "";
								return match[1].replace("@mds-bd/ctv", "mds-bd");
							} else {
								return "mds-bd-kraken";
							}
						}

						if (id.includes("@lightning")) {
							return "mds-bd-lightning";
						}

						if (id.includes("@mds-bd/rti-lab-ovp-kit-js")) {
							return "mds-bd-rti-lab-ovp-kit-js";
						}

						if (id.includes("@mds-bd/rti-lab-analytics-kit-js") || id.includes("@aws-crypto")) {
							return "mds-bd-analytics-kit-trackers";
						}

						if (id.includes("youboralib") || id.includes("comscore-sdk-js")) {
							return "mds-bd-comscore-youbora";
						}

						if (id.includes("@webtrekk")) {
							return "mds-bd-webtrekk";
						}

						if (id.includes("@firebolt-js")) {
							return "mds-bd-firebolt-js";
						}

						if (id.includes("/shaka-player")) {
							return "mds-bd-shaka-player";
						}

						if (id.includes("/rti-lab-player-utils")) {
							return "mds-bd-rti-lab-player-utils";
						}

						if (id.endsWith("/rti-lab-ctv-player")) {
							return "mds-bd-rti-lab-ctv-player";
						}

						if (id.includes("@mds-bd/medinf-ctv-utils")) {
							return "mds-bd-ctv-utils";
						}

						if (id.includes("adapter-theplatform")) {
							return "adapter-theplatform";
						}
					},
				},
			},
			terserOptions: isServe
				? undefined
				: {
						keep_fnames: true,
						mangle: true,
						safari10: true,
						output: {
							comments: false,
						},
						compress: {
							global_defs: {
								module: true,
							},
							drop_console: isDevelopment || define.APP_ENABLE_DEBUG ? false : true,
							drop_debugger: isDevelopment || define.APP_ENABLE_DEBUG ? false : true,
						},
					},
		},
		plugins: [
			//To support node module libraries like comscore
			//@TODO: customize in base of (@see https://www.npmjs.com/package/vite-plugin-node-polyfills)
			tsconfigPaths(),
			importChunkUrl(),
			solidPlugin({
				solid: {
					omitNestedClosingTags: false,
					moduleName: "@lightningtv/solid",
					generate: "universal",
				},
			}),
			platformBuildConfig.buildOptionsLegacy && legacy(platformBuildConfig.buildOptionsLegacy),
			ViteEjsPlugin(
				{
					title: `${define.APP_STAGE}-${define.APP_NAME}`,
					meta: [
						{
							name: "appName",
							value: `${define.APP_VERSION}-${define.APP_STAGE}`,
						},
						{
							name: "platform",
							value: `${define.APP_CTV_PLATFORM}`,
						},
						{
							name: "enviroment",
							value: `${define.APP_STAGE}`,
						},
						{
							name: "version",
							value: `${define.APP_VERSION}`,
						},
					],
					isServe: !!isServe,
					bumperUrl: define.BUMPER_URL,
					didomi: {
						enabled: cmpType === "didomi",
						sdkUrl: `${envs.APP_DIDOMI_SDK_URL}`,
						apiKey: `${envs.APP_DIDOMI_API_KEY}`,
						noticeId: `${envs.APP_DIDOMI_NOTICE_ID}`,
					},
				},
				{
					ejs: {
						beautify: true,
					},
				},
			),
			ASSETS_COPY &&
				ASSETS_COPY.length > 0 &&
				viteStaticCopy({
					targets: ASSETS_COPY,
				}),
			ViteBabelPlugin({
				filter: /bumper\.ts$/,
				config: {
					presets: [
						[
							"@babel/preset-env",
							{
								modules: false,
							},
						],
					],
				},
			}),
			ViteInjectScriptPlugin({
				scriptId: "bumper-script",
				scriptFileName: "bumper.js",
			}),
			ViteMultiPlatformIndexPlugin({
				platform,
				multiPlatforms: ["VESTEL", "VEWD", "VIDAA", "VIERA", "TITANOS", "TIVO", "WHALEOS"],
			}),
		],
		define: {
			"process.env": define,
			global: {},
		},
		server: {
			hmr: true,
			host: true,
			port: 5173,
			open: true,
			https: {
				key: fs.readFileSync(path.resolve(__dirname, "./certs/self-signed/mediaset-localhost-key.pem")),
				cert: fs.readFileSync(path.resolve(__dirname, "./certs/self-signed/mediaset-localhost-cert.pem")),
			},
		},
		preview: {
			port: 8080,
		},
	};
	return defConfig;
};
