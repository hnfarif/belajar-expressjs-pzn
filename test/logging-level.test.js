import winston from "winston";

test("test logger console transport", () => {
  const logger = winston.createLogger({
    level: "debug", //untuk menentukan sampai level mana yang akan ditampilkan
    transports: [new winston.transports.Console()],
  });

  logger.error("Hello error");
  logger.warn("Hello warn");
  logger.info("Hello info");
  logger.http("Hello http");
  logger.verbose("Hello verbose");
  logger.debug("Hello debug");
  logger.silly("Hello silly"); //ini tidak akan ditampilkan karena levelnya hanya sampai debug
});
