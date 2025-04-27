import pino from "pino";

function getLogConfigFromParams(): { enable: boolean; level: pino.Level } {
  if (!globalThis || !globalThis.location) {
    return { enable: true, level: "error" };
  }
  const params = new URLSearchParams(globalThis.location.search);
  const enable = !!params.get("debug") || false;
  const level = params.get("logLevel") as pino.Level | null;
  const validLevels: pino.Level[] = [
    "trace",
    "debug",
    "info",
    "warn",
    "error",
    "fatal",
  ];
  if (level && validLevels.includes(level)) {
    return { enable, level };
  }
  return { enable, level: "error" };
}

const LOGGER_CONFIG = getLogConfigFromParams();
const pinLogger = pino({
  enabled: LOGGER_CONFIG.enable,
  browser: {
    asObject: true,
  },
  level: LOGGER_CONFIG.level,
});

function formatMessage(tag: string, msg: string) {
  return `[${tag}]: ${msg}`;
}

const logger = {
  trace: (tag: string, msg: string, ...args: any[]) =>
    pinLogger.trace(formatMessage(tag, msg), ...args),
  debug: (tag: string, msg: string, ...args: any[]) =>
    pinLogger.debug(formatMessage(tag, msg), ...args),
  info: (tag: string, msg: string, ...args: any[]) =>
    pinLogger.info(formatMessage(tag, msg), ...args),
  warn: (tag: string, msg: string, ...args: any[]) =>
    pinLogger.warn(formatMessage(tag, msg), ...args),
  error: (tag: string, msg: string, ...args: any[]) =>
    pinLogger.error(formatMessage(tag, msg), ...args),
  fatal: (tag: string, msg: string, ...args: any[]) =>
    pinLogger.fatal(formatMessage(tag, msg), ...args),
};

export default logger;
