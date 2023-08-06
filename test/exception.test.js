import { MyException, callme } from "../src/exception";

test("test exception", () => {
  expect(() => callme("Hanif")).toThrow();
  expect(() => callme("Hanif")).toThrow(MyException);
  expect(() => callme("Hanif")).toThrow("Hanif is not allowed");
});

test("test exception not happen", () => {
  expect(callme("Budi")).toBe("Hello Budi");
});
