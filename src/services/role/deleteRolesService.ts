import { inject, injectable } from 'tsyringe';
import { IDeleteRoles, IFindOneRoles } from '@interfaces/IRolesRepository';

interface IRolesRepository extends IDeleteRoles, IFindOneRoles { }
@injectable()
export class DeleteRolesService {
  constructor(
    @inject('RolesRepository')
    private readonly repository: IRolesRepository
  ) { }
  async execute(roles_id: string): Promise<Error> {
    if (!roles_id) {
      return new Error('Mandatory parameters not entered id or roles');
    }
    const existsRoles = await this.repository.findOneRoles(roles_id);

    if (!existsRoles) {
      return new Error('Roles does not exist in database');
    }
    await this.repository.deleteRoles(roles_id);
  }
}
