import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser("secretkey"));
app.use(express.json());

app.get("/", (req, res) => {
  const username = req.signedCookies["Login"];
  res.send(`Hello ${username}!`);
});

app.post("/login", (req, res) => {
  const { username } = req.body;

  res.cookie("Login", username, { path: "/", signed: true }); //opsi path untuk menentukan cookie hanya bisa diakses di path tertentu
  res.send(`Hello ${username}!`);
});

test("Test Cookie Read", async () => {
  const response = await request(app)
    .get("/")
    .set(
      "Cookie",
      "Login=s%3Ahanif.9cYFdhUSiCFqIPaTHBMDYDfOs10xyJJQM8uFwIRf%2Brk; Path=/"
    );

  expect(response.status).toEqual(200);
  expect(response.text).toBe("Hello hanif!");
});

test("Test Cookie Write", async () => {
  const response = await request(app)
    .post("/login")
    .send({ username: "hanif" });
  console.info(response.get("Set-Cookie"));
  expect(response.get("Set-Cookie").toString()).toContain("hanif");
  expect(response.text).toBe("Hello hanif!");
});
