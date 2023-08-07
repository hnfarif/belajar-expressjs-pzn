import winston from "winston";

test("test logger", () => {
  const logger = winston.createLogger({});

  logger.log({
    level: "info",
    message: "Hello distributed log files!",
  });
});
