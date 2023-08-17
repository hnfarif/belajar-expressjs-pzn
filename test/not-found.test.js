import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.redirect("/to-next-page");
});

app.use((req, res) => {
  res.status(404).send("404 | Not Found");
});

test("Test ExpressJS GET /", async () => {
  const response = await request(app).get("/");

  expect(response.status).toBe(302);
  expect(response.get("location")).toBe("/to-next-page");
});

test("Test Response Not Found", async () => {
  const response = await request(app).get("/halaman-tidak-ada");

  expect(response.status).toBe(404);
  expect(response.text).toBe("404 | Not Found");
});
