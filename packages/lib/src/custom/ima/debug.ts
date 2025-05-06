import logger, { LogLevel } from "../../utils/logger";

export function activateDebug(activate: boolean, logLevel: LogLevel = "debug") {
	logger.setEnable(activate);
	logger.setLogLevel(logLevel);
}
