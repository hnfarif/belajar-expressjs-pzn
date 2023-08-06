import { calculate, calculateAndReturn } from "../src/sum";

test("calculate mock function", () => {
  const callback = jest.fn();

  calculate([1, 2, 3], callback);
  calculate([1, 2, 3, 5, 6], callback);
  calculate([1, 2, 3, 5, 6, 7, 8], callback);

  expect(callback.mock.calls.length).toBe(3);
  expect(callback.mock.calls[0][0]).toBe(6);
  expect(callback.mock.calls[1][0]).toBe(17);
  expect(callback.mock.calls[2][0]).toBe(32);
});

test("mock return value", () => {
  const callback = jest.fn();

  callback.mockReturnValueOnce(10).mockReturnValueOnce(20);

  expect(callback()).toBe(10);
  expect(callback()).toBe(20);
  expect(callback()).toBe(undefined);
  expect(callback()).toBe(undefined);

  // atau bisa juga seperti ini menggunakan function calculateAndReturn, perilaku calculateAndReturn yaitu diubah return value nya, meski parameter yang dikirimkan berbeda
  // expect(calculateAndReturn([10, 10, 10], callback)).toBe(10);
  // expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(20);

  // atau bisa juga langsung akses pemanggilan mocknya berdasar index
  expect(callback.mock.results[0].value).toBe(10);
  expect(callback.mock.results[1].value).toBe(20);
});

test("test mock implementation", () => {
  const callback = jest.fn();

  callback.mockImplementation((total) => {
    return total * 2;
  });

  expect(calculateAndReturn([10, 10, 10], callback)).toBe(60);
  expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(100);

  expect(callback.mock.results[0].value).toBe(60);
  expect(callback.mock.results[1].value).toBe(100);
});
