import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  const username = req.cookies["username"];
  res.send(`Hello ${username}!`);
});

app.post("/login", (req, res) => {
  const { username } = req.body;

  res.cookie("Login", username, { path: "/" });
  res.send(`Hello ${username}!`);
});

test("Test Cookie Read", async () => {
  const response = await request(app)
    .get("/")
    .set("Cookie", "username=hanif;author=Hanif Arif");

  expect(response.status).toEqual(200);
  expect(response.text).toBe("Hello hanif!");
});

test("Test Cookie Write", async () => {
  const response = await request(app)
    .post("/login")
    .send({ username: "hanif" });

  expect(response.get("Set-Cookie").toString()).toBe("Login=hanif; Path=/");
  expect(response.text).toBe("Hello hanif!");
});
