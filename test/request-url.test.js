import express from "express";
import request from "supertest";

const app = express();

app.get("/hello/world", (req, res) => {
  res.json({
    path: req.path,
    query: req.query,
    originalUrl: req.originalUrl,
    hostname: req.hostname,
    protocol: req.protocol,
    method: req.method,
  });
});

test("Test ExpressJS request url", async () => {
  const response = await request(app)
    .get("/hello/world")
    .query({ name: "John" });

  expect(response.status).toBe(200);
  expect(response.body).toEqual({
    path: "/hello/world",
    query: { name: "John" },
    originalUrl: "/hello/world?name=John",
    hostname: "127.0.0.1",
    protocol: "http",
    method: "GET",
  });
});
