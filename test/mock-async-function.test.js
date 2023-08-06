import { getBalance } from "../src/async";

test("test mock async function", async () => {
  const from = jest.fn();

  from.mockResolvedValueOnce(700);

  const result = getBalance("Adnin", from);

  await expect(result).resolves.toEqual({
    name: "Adnin",
    balance: 700,
  });

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(700);
});

test.failing("test mock async function rejected", async () => {
  const from = jest.fn();

  from.mockRejectedValueOnce(new Error("Ups"));

  await getBalance("Tejo", from);
});

test("test mock async function error matchers", async () => {
  const from = jest.fn();

  from.mockRejectedValueOnce(new Error("Ups"));

  await expect(getBalance("Tejo", from)).rejects.toThrow();
});
