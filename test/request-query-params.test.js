import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${req.query.name}!`);
});

test("Test ExpressJS GET /", async () => {
  const response = await request(app).get("/").query({ name: "John" });

  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello John!");
});
