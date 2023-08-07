import winston from "winston";

test("test file transport & console", () => {
  const logger = winston.createLogger({
    level: "info",
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
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "application.log" }),
      new winston.transports.File({
        level: "warn",
        filename: "application-warn.log",
      }), // tambahkan level untuk mengatur spesifik level log pada file transport yang akan ditulis, maka hanya level warn keatas yang akan ditulis
    ],
  });

  logger.error("Hello error");
  logger.warn("Hello warn");
  logger.info("Hello info");
});
