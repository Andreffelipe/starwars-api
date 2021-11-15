import { IRuleRepository } from '@interfaces/IRuleRepository';
import { IUserRepository } from '@interfaces/IUserRepository';
import { RuleRepository } from '@repository/ruleRepository';
import { UserRepository } from '@repository/userRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IRuleRepository>('RuleRepository', RuleRepository);

export { container };
