import winston from "winston";

test("test logger format", () => {
  const logger = winston.createLogger({
    level: "debug",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      // winston.format.json, // defaultnya
      winston.format.printf((log) => {
        return `${log.timestamp} ${log.level.toUpperCase()}: ${log.message} ${
          log.ms
        }`;
      })
    ),
    transports: [new winston.transports.Console()],
  });

  logger.error("Hello error");
  logger.warn("Hello warn");
  logger.info("Hello info");
});
