import { inject, injectable } from 'tsyringe';
import { IDeleteUser } from '@interfaces/IUserRepository';

@injectable()
export class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private readonly repository: IDeleteUser
  ) { }
  async execute(id: string) {
    if (!id) {
      return new Error('id is required');
    }
    const user = await this.repository.deleteUser(id);

    return user;
  }
}
