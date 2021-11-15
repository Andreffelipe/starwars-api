import { User } from 'API';

export interface ICreateUser {
  createUser(user: User): Promise<User>
}
export interface IFindUser {
  findUser(name: string): Promise<User>
}
export interface IFindApiKeyUser {
  findApiKeyUser(apiKey: string): Promise<User>
}
export interface IUpdateUser {
  updateUser(name: string, permission: string, rule: string): Promise<User>
}
export interface IDeleteUser {
  deleteUser(user_id: string): Promise<void>
}

export interface IUserRepository extends ICreateUser, IFindUser, IUpdateUser, IDeleteUser, IFindApiKeyUser { }
