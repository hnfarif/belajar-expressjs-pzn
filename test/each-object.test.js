import { sumAll } from "../src/sum.js";

const table = [
  { input: [], expected: 0 },
  { input: [1, 2, 3], expected: 6 },
  { input: [1, 2, 3, 4], expected: 10 },
  { input: [1, 2, 3, 4, 5], expected: 15 },
];

test.each(table)(
  "sumAll($input) should return $expected",
  ({ input, expected }) => {
    expect(sumAll(input)).toBe(expected);
  }
);
