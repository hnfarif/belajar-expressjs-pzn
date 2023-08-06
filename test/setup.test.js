import { sum } from "../src/sum";

beforeAll(async () => {
  console.info("beforeAll");
});

afterAll(() => {
  console.info("afterAll");
});

beforeEach(() => {
  console.info("beforeEach");
});

afterEach(() => {
  console.info("afterEach");
});

test("first test", () => {
  expect(sum(1, 2)).toBe(3);
  console.info("first test");
});

test("second test", () => {
  expect(sum(1, 2)).toBe(3);
  console.info("second test");
});
