import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";

test("test logging daily rotate file", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json // defaultnya
    ),
    transports: [
      new winston.transports.Console(),
      new winstonDaily({
        filename: "application-%DATE%.log",
        datePattern: "YYYY-MM-DD-HH",
        zippedArchive: true,
        //jika tidak memasukkan maxSize, maka defaultnya akan rotate per hari
        maxSize: "1m", //maxsize per file 1mb
        maxFiles: "14d", //max file 14 hari, jika sudah lebih dari 14 hari, maka file yang paling lama akan dihapus
      }),
    ],
  });

  for (let i = 0; i < 30000; i++) {
    logger.error(`Hello error ${i}`);
    logger.warn(`Hello warn ${i}`);
    logger.info(`Hello info ${i}`);
  }
});
