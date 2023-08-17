import express from "express";
import request from "supertest";

const app = express();

// app.use(express.static(__dirname + "/static")); //menggunakan middleware static untuk mengakses file statis
app.use("/static", express.static(__dirname + "/static")); //menggunakan middleware static untuk mengakses file statis dan menambahkan prefix /static

app.get("/", (req, res) => {
  res.send("Hello Response");
});

app.get("/example.txt", (req, res) => {
  res.send("Hello Response");
});

test("Test Static File", async () => {
  const response = await request(app).get("/");

  expect(response.text).toBe("Hello Response");
});

test("Test Static example.txt", async () => {
  const response = await request(app).get("/example.txt");

  // expect(response.text).toContain("This is sample text"); // ini jika menggunakan middleware static tanpa prefix
  expect(response.text).toContain("Hello Response");
});

test("Test Static /static/example.txt", async () => {
  const response = await request(app).get("/static/example.txt");

  expect(response.text).toContain("This is sample text");
});
