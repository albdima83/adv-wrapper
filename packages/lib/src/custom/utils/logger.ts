export type LogLevel = "fatal" | "error" | "warn" | "info" | "debug" | "trace";

const LOG_LEVEL_ORDERS = ["debug", "info", "warn", "error", "fatal"];

const MAP_CONSOLE_FN: Record<LogLevel, typeof console.log> = {
  debug: console.debug || console.log,
  info: console.info || console.log,
  warn: console.warn || console.log,
  error: console.error || console.log,
  fatal: console.error || console.log,
  trace: console.trace || console.log,
};

class BasicLogger {
  private enable: boolean;
  private level: LogLevel;

  constructor(config: { enable?: boolean; level?: LogLevel }) {
    this.enable = config.enable || false;
    this.level = config.level || "info";
  }

  private log(level: LogLevel, tag: string, message: string, ...args: any[]) {
    if (!this.enable) {
      return;
    }
    if (
      LOG_LEVEL_ORDERS.indexOf(level) >= LOG_LEVEL_ORDERS.indexOf(this.level)
    ) {
      const timestamp = new Date().toISOString();
      const fn = MAP_CONSOLE_FN[level] ?? console.log;
      fn(`[${tag}][${level}]`, message, ...args);
    }
  }

  debug(tag: string, message: string, ...args: any[]) {
    this.log("debug", tag, message, ...args);
  }

  info(tag: string, message: string, ...args: any[]) {
    this.log("info", tag, message, ...args);
  }

  warn(tag: string, message: string, ...args: any[]) {
    this.log("warn", tag, message, ...args);
  }

  error(tag: string, message: string, ...args: any[]) {
    this.log("error", tag, message, ...args);
  }

  setLogLevel(level: LogLevel) {
    this.level = level;
  }
}

function getLogConfigFromParams(): { enable: boolean; level: LogLevel } {
  if (!globalThis || !globalThis.location) {
    return { enable: true, level: "error" };
  }
  const params = new URLSearchParams(globalThis.location.search);
  const enable = !!params.get("debug") || false;
  const level = params.get("logLevel") as LogLevel | null;
  if (level && LOG_LEVEL_ORDERS.includes(level)) {
    return { enable, level };
  }
  return { enable, level: "debug" };
}

const LOGGER_CONFIG = getLogConfigFromParams();
const logger = new BasicLogger({
  enable: LOGGER_CONFIG.enable,
  level: LOGGER_CONFIG.level,
});

export default logger;
