export type LogLevel = "fatal" | "error" | "warn" | "info" | "debug" | "trace";

const LOG_LEVEL_ORDERS: Array<LogLevel> = [
  "debug",
  "info",
  "warn",
  "error",
  "fatal",
  "trace",
];

const MAP_CONSOLE_FN: Record<LogLevel, typeof console.log> = {
  debug: console.debug || console.log,
  info: console.info || console.log,
  warn: console.warn || console.log,
  error: console.error || console.log,
  fatal: console.error || console.log,
  trace: console.trace || console.log,
};

/**
 * Simple AdsLogger to formatted log and use speiecific console function if it is supported
 */
class AdsLogger {
  private enable: boolean;
  private level: LogLevel;

  constructor(config: { enable?: boolean; level?: LogLevel }) {
    this.enable = config.enable || false;
    this.level = config.level || "info";
  }

  public debug(tag: string, message: string, ...args: unknown[]) {
    this.log("debug", tag, message, ...args);
  }

  public info(tag: string, message: string, ...args: unknown[]) {
    this.log("info", tag, message, ...args);
  }

  public warn(tag: string, message: string, ...args: unknown[]) {
    this.log("warn", tag, message, ...args);
  }

  public error(tag: string, message: string, ...args: unknown[]) {
    this.log("error", tag, message, ...args);
  }

  public setLogLevel(level: LogLevel) {
    this.level = level;
  }

  public setEnable(enable: boolean) {
    this.enable = enable;
  }

  private log(
    level: LogLevel,
    tag: string,
    message: string,
    ...args: unknown[]
  ) {
    if (!this.enable) {
      return;
    }
    if (
      LOG_LEVEL_ORDERS.indexOf(level) >= LOG_LEVEL_ORDERS.indexOf(this.level)
    ) {
      const timestamp = new Date().toISOString();
      const fn = MAP_CONSOLE_FN[level] ?? console.log;
      fn(`[${timestamp}]  [${tag}] [${level}]`, message, ...args);
    }
  }
}

const logger = new AdsLogger({
  enable: process.env.NODE_ENV !== "production",
  level: (process.env.LOG_LEVEL as LogLevel) ?? "error",
});

export default logger;
