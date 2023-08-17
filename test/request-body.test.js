import express from "express";
import request from "supertest";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // konfigurasi extended jika false maka tanpa query param, sedangkan jika true maka data yang diterima bisa request body dan query param
app.post("/json", (req, res) => {
  const name = req.body.name;

  res.json({
    message: `Hello ${name}!`,
  });
});

app.post("/form", (req, res) => {
  const name = req.body.name;

  res.json({
    message: `Hello ${name}!`,
  });
});

test("Test Request JSON", async () => {
  const response = await request(app)
    .post("/json")
    .set("Content-Type", "application/json")
    .send({ name: "John Doe" });

  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: "Hello John Doe!" });
});

test("Test Request Form", async () => {
  const response = await request(app)
    .post("/form")
    .set("Content-Type", "application/x-www-form-urlencoded")
    .send("name=John Doe");

  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: "Hello John Doe!" });
});
