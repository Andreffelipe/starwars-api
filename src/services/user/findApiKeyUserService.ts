import { inject, injectable } from 'tsyringe';
import { IFindApiKeyUser } from '@interfaces/IUserRepository';

@injectable()
export class FindApiKeyUserService {
  constructor(
    @inject('UserRepository')
    private readonly repository: IFindApiKeyUser
  ) { }
  async execute(api_key: string) {
    if (!api_key) {
      return new Error('api_key is required');
    }
    const user = await this.repository.findApiKeyUser(api_key);
    return user;
  }
}
