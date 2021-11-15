import { IUserRepository } from '@interfaces/IUserRepository';
import { User } from 'API';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class UserRepository implements IUserRepository {
  async createUser(user: User): Promise<User> {
    const newUser = await prisma.user.create({
      data: {
        api_key: user.api_key,
        username: user.username,
        permissions: user.permissions,
        roles: {
          create: {
            roles_id: user.roles as string,
          }
        },
      }
    });
    return newUser;
  }
  async findUser(name: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        username: name,
      }
    });
    return user;
  }
  async updateUser(name: string, permission: string, role: string): Promise<User> {
    const userUpdated = await prisma.user.update({
      data: {
        permissions: permission,
        roles: {
          create: {
            roles_id: role
          }
        }
      },
      where: {
        username: name
      }
    });
    return userUpdated;
  }
  async deleteUser(user_id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id: user_id
      }
    });
    return;
  }
  async findApiKeyUser(api_key: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        api_key
      }, include: {
        roles: {
          select: {
            roles: true
          }
        }
      }
    });
    if (!user) return null;
    const result = {
      id: user.id,
      username: user.username,
      api_key: user.api_key,
      roles: user.roles.map((element) => element.roles.name),
      permissions: user.permissions,
    };
    return result;
  }
  async findUserAndRule(id: string) {
    const user = await prisma.user.findUnique({
      include: {
        roles: {
          where: {
            user_id: id
          }
        }
      },
      where: {
        id: id
      }
    });
    return user;
  }
}
