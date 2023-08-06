import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

jest.mock("../src/user-repository.js");

const repository = new UserRepository();
const service = new UserService(repository);

test("mock user save", () => {
  const user = { id: 1, name: "John Doe" };

  service.save(user);

  expect(repository.save).toHaveBeenCalled();
  expect(repository.save).toBeCalledTimes(1);
  expect(repository.save).toBeCalledWith(user);
});

test("mock user findByID", () => {
  const user = { id: 1, name: "John Doe" };
  repository.findByID.mockReturnValueOnce(user);

  const result = service.findByID(1);

  expect(result).toEqual(user);
  expect(repository.findByID).toHaveBeenCalled();
  expect(repository.findByID).toBeCalledTimes(1);
  expect(repository.findByID).toBeCalledWith(1);
});

test("mock user findAll", () => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];
  repository.findAll.mockReturnValueOnce(users);

  const result = service.findAll();

  expect(result).toEqual(users);
  expect(repository.findAll).toHaveBeenCalled();
});
