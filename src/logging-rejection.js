import winston from "winston";

async function callAsync() {
  return Promise.reject("Ups, something went wrong");
}

const logger = winston.createLogger({
  level: "info",
  //   handleExceptions: true,
  // handleRejections: true,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "src/exception.log",
    }),
  ],
});

callAsync();
