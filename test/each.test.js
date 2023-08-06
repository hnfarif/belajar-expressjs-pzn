import { sumAll } from "../src/sum.js";

const table = [
  [[], 0],
  [[1, 2, 3], 6],
  [[1, 2, 3, 4], 10],
  [[1, 2, 3, 4, 5], 15],
];

test.each(table)("sumAll(%s) should return %i", (input, expected) => {
  expect(sumAll(input)).toBe(expected);
});
