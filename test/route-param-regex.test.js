import express from "express";
import request from "supertest";

const app = express();

app.get("/products/:id", (req, res) => {
  res.send(`Product ID: ${req.params.id}`);
});

app.get("/categories/:id(\\d+)", (req, res) => {
  res.send(`Category ID: ${req.params.id}`);
});

test("Test Route Params Regex", async () => {
  let response = await request(app).get("/products/hanif");
  expect(response.text).toBe("Product ID: hanif");

  response = await request(app).get("/products/salah");
  expect(response.text).toBe("Product ID: salah");

  response = await request(app).get("/categories/123");
  expect(response.text).toBe("Category ID: 123");

  response = await request(app).get("/categories/salah");
  expect(response.status).toBe(404);
});
