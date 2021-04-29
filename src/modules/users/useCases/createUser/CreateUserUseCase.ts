import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailArleadyExists = this.usersRepository.findByEmail(email);
    if (emailArleadyExists) {
      throw new Error("Email arleady exists");
    }
    return this.usersRepository.create({
      name,
      email,
    });
  }
}

export { CreateUserUseCase };
