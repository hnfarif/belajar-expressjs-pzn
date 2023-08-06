import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
  const result = await sayHelloAsync("Hanif");

  expect(result).toBe("Hello Hanif");
});

test("test async matchers", async () => {
  await expect(sayHelloAsync("Hanif")).resolves.toBe("Hello Hanif");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
