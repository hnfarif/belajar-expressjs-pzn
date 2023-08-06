import { calculate } from "../src/sum";

test("test mock matchers", () => {
  const callback = jest.fn();

  calculate([1, 2], callback);
  calculate([3, 4], callback);

  expect(callback).toHaveBeenCalled();
  expect(callback).toHaveBeenCalledTimes(2);
  expect(callback).toHaveBeenCalledWith(7);
  expect(callback).toHaveBeenCalledWith(3);
});
