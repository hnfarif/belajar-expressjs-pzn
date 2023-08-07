import winston from "winston";
import TransportStream from "winston-transport";

test("test logger with new transport", () => {
  class CustomTransport extends TransportStream {
    constructor(opts) {
      super(opts);
    }

    log(info, next) {
      // disini kita bisa melakukan apa saja, seperti mengirim log ke email, ke database, ke file, ke console, ke server, dll. Contoh dibawah ini hanya menampilkan di console
      console.log(
        `${new Date()} [${info.level.toUpperCase()}] : ${info.message}`
      );
      next();
    }
  }

  const logger = winston.createLogger({
    // level: "info",
    transports: [
      new CustomTransport({
        level: "info",
      }),
    ],
  });

  logger.error("Hello error");
  logger.warn("Hello warn");
  logger.info("Hello info"); // hanya info keatas akan tampil di console, untuk menampilkan dibawahnya, ubah level di CustomTransport atau di createLogger
  logger.http("Hello http");
  logger.verbose("Hello verbose");
  logger.debug("Hello debug");
  logger.silly("Hello silly");
});
