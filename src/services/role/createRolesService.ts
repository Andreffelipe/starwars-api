import { inject, injectable } from 'tsyringe';
import { ICreateRoles, IFindNameRoles } from '@interfaces/IRolesRepository';
import { Roles } from 'API';

interface IRolesRepository extends ICreateRoles, IFindNameRoles { }

@injectable()
export class CreateRolesService {
  constructor(
    @inject('RolesRepository')
    private readonly repository: IRolesRepository
  ) { }
  async execute(roles: Roles): Promise<Roles | Error> {
    if (!roles.name || !roles.description) {
      return new Error('To create a role the name and description cannot be empty');
    }
    const isValidName = ['read', 'write', 'update', 'delete']
      .find((element) => roles.name.split(':')[0].toLocaleLowerCase() == element);

    if (!isValidName) {
      return new Error('the name must start with read, write, update, or delete');
    }

    const existsRoles = await this.repository.findNameRoles(roles.name);

    if (existsRoles) {
      return new Error('Roles exist in database');
    }

    const newRoles = await this.repository.createRoles(roles);

    return newRoles;
  }
}
