import { inject, injectable } from 'tsyringe';
import { IFindAllRoles, IFindOneRoles } from '@interfaces/IRolesRepository';
import { Roles } from 'API';

interface IRolesRepository extends IFindAllRoles, IFindOneRoles { }
@injectable()
export class FindRolesService {
  constructor(
    @inject('RolesRepository')
    private readonly repository: IRolesRepository
  ) { }
  async execute(roles_id: string): Promise<Roles | Roles[]> {
    if (!roles_id) {
      return await this.repository.findAllRoles();
    }
    return await this.repository.findOneRoles(roles_id);
  }
}
