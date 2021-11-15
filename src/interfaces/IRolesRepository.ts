import { Roles } from 'API';
export interface ICreateRoles {
  createRoles(roles: Roles): Promise<Roles>
}
export interface IUpdateRoles {
  updateRoles(roles: Roles, roles_id: string): Promise<Roles>
}
export interface IDeleteRoles {
  deleteRoles(roles_id: string): Promise<void>
}
export interface IFindNameRoles {
  findNameRoles(roles_id: string): Promise<Roles>
}
export interface IFindOneRoles {
  findOneRoles(roles_id: string): Promise<Roles>
}
export interface IFindAllRoles {
  findAllRoles(): Promise<Roles[]>
}

export interface IRolesRepository extends ICreateRoles,
  IUpdateRoles,
  IDeleteRoles,
  IFindOneRoles,
  IFindAllRoles,
  IFindNameRoles { }

