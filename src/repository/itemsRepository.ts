
import { IRepository } from '@interfaces/IRepository';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class Repository<T> implements IRepository<T> {
  create(query: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
  find(query: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
  updateT(query: string, id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete(query: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findAll(query: string): Promise<T> {
    throw new Error('Method not implemented.');
  }

}
