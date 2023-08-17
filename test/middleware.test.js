import express from "express";
import request from "supertest";

const logger = (req, res, next) => {
  console.log("Request received at: " + new Date());
  next();
};

const addPoweredHeader = (req, res, next) => {
  res.set("X-Powered-By", "Hanif Arif");
  next();
};

const apiKeyMiddleware = (req, res, next) => {
  if (req.query.apiKey) {
    next();
  } else {
    res.status(401).send({ message: "Invalid API Key" });
  }
};

const requestTimeMiddleware = (req, res, next) => {
  req.requestTime = new Date();
  next();
};

const app = express();
app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);
app.use(requestTimeMiddleware);

app.get("/", (req, res) => {
  res.send("Hello Response");
});

app.get("/time", (req, res) => {
  res.send({ requestTime: req.requestTime });
});

test("Test Response Middleware", async () => {
  const response = await request(app).get("/").query({ apiKey: "123" });

  expect(response.get("X-Powered-By")).toBe("Hanif Arif");
  expect(response.text).toBe("Hello Response");
});

test("Test Response Middleware Unauthorized", async () => {
  const response = await request(app).get("/");

  expect(response.status).toBe(401);
  expect(response.body.message).toBe("Invalid API Key");
});

test("Test manipulate request", async () => {
  const response = await request(app).get("/time").query({ apiKey: "123" });

  expect(response.get("X-Powered-By")).toBe("Hanif Arif");
  //check if request body has requestTime property
  expect(response.body.requestTime).toBeDefined();
});
