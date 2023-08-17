import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  const type = req.get("Content-Type");
  res.send(`Hello ${type}`);
});

test("Test ExpressJS GET /", async () => {
  const response = await request(app)
    .get("/")
    .query({ name: "John" })
    .set("content-type", "text/plain");

  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello text/plain");
});
