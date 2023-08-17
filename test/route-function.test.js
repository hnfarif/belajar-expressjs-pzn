import express from "express";
import request from "supertest";

const app = express();

app
  .route("/products")
  .get((req, res) => {
    res.send("GET /products");
  })
  .post((req, res) => {
    res.send("POST /products");
  })
  .put((req, res) => {
    res.send("PUT /products");
  });

test("Test Route Params Regex", async () => {
  let response = await request(app).get("/products");
  expect(response.text).toBe("GET /products");

  response = await request(app).post("/products");
  expect(response.text).toBe("POST /products");

  response = await request(app).put("/products");
  expect(response.text).toBe("PUT /products");
});
