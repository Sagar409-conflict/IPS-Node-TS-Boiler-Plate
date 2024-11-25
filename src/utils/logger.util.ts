import winston, { LoggerOptions } from "winston";

const logLevels = {
  levels: {
    info: 0,
    warn: 1,
    error: 2,
    debug: 3,
  },
  colors: {
    info: "green",
    warn: "yellow",
    error: "red",
    debug: "blue",
  },
};

const logFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const loggerOptions: LoggerOptions = {
  levels: logLevels.levels,
  transports: [
    new winston.transports.Console({
      level: "debug",
      format: logFormat,
    }),
  ],
};

const logger = winston.createLogger(loggerOptions);

const logMessage = (message: string) => {
  logger.info(message);
};

export default logger;
