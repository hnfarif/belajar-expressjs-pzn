import { UserRepository } from "./user-repository";

export class UserService {
  constructor(userRepository) {
    if (userRepository) {
      this.userRepository = userRepository;
    } else {
      this.userRepository = new UserRepository();
    }
  }

  save(user) {
    this.userRepository.save(user);
  }

  findByID(user) {
    return this.userRepository.findByID(user);
  }

  findAll(user) {
    return this.userRepository.findAll(user);
  }
}
