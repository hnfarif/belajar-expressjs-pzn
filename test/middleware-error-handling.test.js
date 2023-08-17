import express from "express";
import request from "supertest";

const app = express();

const errorHandling = (err, req, res, next) => {
  res.status(500).send(`Error: ${err.message}`);
};

app.get("/", (req, res) => {
  throw new Error("Ups!");
});

app.use(errorHandling);

test("Test ExpressJS GET /", async () => {
  const response = await request(app).get("/");

  expect(response.status).toBe(500);
  expect(response.text).toBe("Error: Ups!");
});
