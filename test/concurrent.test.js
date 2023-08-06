import { sayHelloAsync } from "../src/async";

test.concurrent("concurrent 1", async () => {
  await expect(sayHelloAsync("John")).resolves.toBe("Hello John");
});

test.concurrent("concurrent 2", async () => {
  await expect(sayHelloAsync("Tejo")).resolves.toBe("Hello Tejo");
});

test.concurrent("concurrent 3", async () => {
  await expect(sayHelloAsync("Sutik")).resolves.toBe("Hello Sutik");
});
