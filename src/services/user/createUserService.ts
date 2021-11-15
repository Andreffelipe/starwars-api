import { inject, injectable } from 'tsyringe';
import { ICreateUser, IFindUser } from '@interfaces/IUserRepository';
import { User } from '@models/user';

interface IUserRepository extends ICreateUser, IFindUser { }
@injectable()
export class CreateUserService {
  constructor(
    @inject('UserRepository')
    private readonly repository: IUserRepository
  ) { }
  async execute(name: string, roles_id: string) {
    if (!name || !roles_id) {
      return new Error('Name or rule cannot be null');
    }
    const userExists = await this.repository.findUser(name);

    if (userExists) {
      return new Error('username is already in use');
    }
    const user = new User(name, roles_id);

    const newUser = await this.repository.createUser(user);

    return newUser;
  }
}
