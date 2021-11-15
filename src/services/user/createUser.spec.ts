import { IUserRepository } from "@interfaces/IUserRepository";
import { User } from "API";
import { CreateUserService } from "./createUserService";



export class UpdateUserService {
  async execute() { }
}
export class DeleteUserService {
  async execute() { }
}

class FakeRepository implements IUserRepository {
  updateUser(name: string, permission: string, rule: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async createUser(user: User): Promise<User> {
    return user
  }
  findUser(name: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  deleteUser(user_id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findApiKeyUser(apiKey: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
}

const spy = () => {
  let repo = new FakeRepository()
  let create = new CreateUserService(repo);

  return {
    create
  }
}

describe('user creation', () => {
  it('should return erro name is invalid', async () => {
    const { create } = spy()
    const result = await create.execute("", "")
    expect(result).toBeInstanceOf(Error)
  });
  it('should return new created user', async () => {
    const { create } = spy()
    const result = await create.execute("Andre", '123') as User
    expect(result.roles[0]).toEqual('read:allContent')
  });
});

// describe('user delete', () => {
//   it('should ', () => {
//     expect(2).toEqual(2)
//   });
// });
// describe('user update', () => {
//   it('should ', () => {
//     expect(2).toEqual(2)
//   });
// });
// describe('user find', () => {
//   it('should ', () => {
//     expect(2).toEqual(2)
//   });
// });
