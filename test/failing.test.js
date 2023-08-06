import { sayHello } from "../src/sayHello";

test("sayHello() with name argument", () => {
  expect(sayHello("Dicoding")).toBe("Hello, Dicoding!");
});

test.failing("sayHello() without name argument should be error", () => {
  sayHello(null);
});

test("sayHello() error matchers", () => {
  expect(() => sayHello(null)).toThrow();
});
