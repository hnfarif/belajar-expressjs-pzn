import express from "express";
import request from "supertest";
import mustacheExpress from "mustache-express";

const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", mustacheExpress());

app.get("/", (req, res) => {
  res.render("index", {
    title: "Sample Title",
    say: "This is sample text",
  });
});

test("Test Response Mustache", async () => {
  const response = await request(app).get("/");

  console.info(response.text);
  expect(response.text).toContain("Sample Title");
  expect(response.text).toContain("This is sample text");
});
