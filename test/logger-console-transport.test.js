import winston from "winston";

test("test logger console transport", () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console()],
  });

  logger.log({
    level: "info",
    message: "Hello info",
  });
});
