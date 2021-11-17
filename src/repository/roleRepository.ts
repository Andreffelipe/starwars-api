
import { IRolesRepository } from '@interfaces/IRolesRepository';
import { PrismaClient } from '@prisma/client';
import { Roles } from 'API';
const prisma = new PrismaClient();

export class RolesRepository implements IRolesRepository {
  async findNameRoles(name: string): Promise<Roles> {
    const roles = await prisma.roles.findUnique({
      where: {
        name
      }
    });
    return roles;
  }
  async createRoles(roles: Roles): Promise<Roles> {
    const newRoles = await prisma.roles.create({
      data: {
        name: roles.name,
        description: roles.description
      }
    });
    return newRoles;
  }
  updateRoles(roles: Roles, roles_id: string): Promise<Roles> {
    throw new Error('Method not implemented.');
  }
  deleteRoles(roles_id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async findOneRoles(roles_id: string): Promise<Roles> {
    const roles = await prisma.roles.findUnique({
      where: {
        id: roles_id
      }
    });
    return roles;
  }
  async findAllRoles(): Promise<Roles[]> {
    const roles = await prisma.roles.findMany();
    return roles;
  }
}
