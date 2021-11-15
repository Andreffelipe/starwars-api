import { inject, injectable } from 'tsyringe';
import { IFindOneRoles, IUpdateRoles } from '@interfaces/IRolesRepository';
import { Roles } from 'API';

interface IRolesRepository extends IUpdateRoles, IFindOneRoles { }
@injectable()
export class UpdateRolesService {
  constructor(
    @inject('RolesRepository')
    private readonly repository: IRolesRepository
  ) { }
  async execute(roles: Roles, id: string) {
    if (!roles.name || !roles.description || !id) {
      return new Error('Mandatory parameters not entered id or role');
    }

    const existsRoles = await this.repository.findOneRoles(id);
    if (!existsRoles) {
      return new Error('Roles does not exist in database');
    }

    const result = await this.repository.updateRoles(roles, id);

    return result;
  }
}
