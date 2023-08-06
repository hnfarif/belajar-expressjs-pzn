import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test("mock user findById", () => {
  const user = { id: 1, name: "John Doe" };

  const findByIdMock = jest.spyOn(repository, "findByID");
  findByIdMock.mockReturnValueOnce(user);

  const result = service.findByID(1);

  expect(result).toEqual(user);
  expect(findByIdMock).toHaveBeenCalled();
  expect(repository.findByID).toHaveBeenCalled(); //sama aja dengan yang diatas karena repository.findById sudah di Mock
  expect(repository.findByID).toBeCalledTimes(1);
  expect(repository.findByID).toBeCalledWith(1);
});

test.failing("mock partial findAll", () => {
  service.findAll();
});
