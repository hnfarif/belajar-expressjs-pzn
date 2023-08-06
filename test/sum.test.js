import { sum, sumAll } from "../src/sum.js";

test("tes function sum 1", () => {
  expect(sum(1, 2)).toBe(3);
});

test("tes function sum 2", () => {
  expect(sum(1, 2)).toBe(3);
});

test("tes function sum 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("tes function sum all", () => {
  expect(sumAll([1, 2, 3, 4, 5])).toBe(15);
});
