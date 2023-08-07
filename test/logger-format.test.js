import winston from "winston";

test("test logger format", () => {
  const logger = winston.createLogger({
    level: "debug",
    //format defaultnya adalah json
    // format: winston.format.simple(),
    // format: winston.format.logstash(),
    format: winston.format.printf((log) => {
      return `${new Date()} ${log.level.toUpperCase()}: ${log.message}`;
    }),
    transports: [new winston.transports.Console()],
  });

  logger.error("Hello error");
  logger.warn("Hello warn");
  logger.info("Hello info");
});
