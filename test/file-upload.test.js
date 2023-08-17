import express from "express";
import request from "supertest";
import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // konfigurasi extended jika false maka tanpa query param, sedangkan jika true maka data yang diterima bisa request body dan query param
app.use(fileUpload());

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

app.post("/upload", async (req, res) => {
  const file = req.files.article;

  await file.mv(`${__dirname}/uploads/${file.name}`);

  res.send(`Hello ${req.body.name}, your file uploaded ${file.name}`);
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

test("Test Request File Upload", async () => {
  const response = await request(app)
    .post("/upload")
    .set("Content-Type", "multipart/form-data")
    .field("name", "John Doe")
    .attach("article", `${__dirname}/contoh.txt`);

  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello John Doe, your file uploaded contoh.txt");
});
