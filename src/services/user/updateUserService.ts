import { inject, injectable } from 'tsyringe';
import { IUpdateUser, IFindUser } from '@interfaces/IUserRepository';

interface IUserRepository extends IUpdateUser, IFindUser { }
@injectable()
export class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private readonly repository: IUserRepository
  ) { }
  async execute(name: string, permission: string, rule: string) {

    if (!name || !permission && !rule) {
      return new Error('Name or rule cannot be null');
    }

    const userExists = await this.repository.findUser(name);

    if (!userExists) {
      return new Error('user not found');
    }

    const newUser = await this.repository.updateUser(name, permission, rule);

    return newUser;
  }
}
