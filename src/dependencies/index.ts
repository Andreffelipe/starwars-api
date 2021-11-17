import { IRolesRepository } from '@interfaces/IRolesRepository';
import { IUserRepository } from '@interfaces/IUserRepository';
import { RolesRepository } from '@repository/roleRepository';
import { UserRepository } from '@repository/userRepository';
import { container } from 'tsyringe';

const userRepo = new UserRepository();
const rolesRepo = new RolesRepository();

container.registerInstance<IUserRepository>('UserRepository', userRepo);
container.registerInstance<IRolesRepository>('RuleRepository', rolesRepo);

export { container };
