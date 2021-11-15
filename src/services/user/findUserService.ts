import { inject, injectable } from 'tsyringe';
import { IFindUser } from '@interfaces/IUserRepository';

@injectable()
export class FindUserService {
  constructor(
    @inject('UserRepository')
    private readonly repository: IFindUser
  ) { }
  async execute(id: string) {
    if (!id) {
      return new Error('id is required');
    }
    const user = await this.repository.findUser(id);

    return user;
  }
}
