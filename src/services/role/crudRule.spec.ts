import { IRolesRepository } from "@interfaces/IRolesRepository";
import { Roles } from "API";
import { CreateRolesService } from "./createRolesService";
import { DeleteRolesService } from "./deleteRolesService";
import { UpdateRolesService } from "./updateRolesService";

const myDatabase: Roles[] = [{ id: "uuid", name: "read:allContent", description: "reading from the characters database and the rest associated" }]

class FakeRepository implements IRolesRepository {
  findNameRoles(roles_id: string): Promise<Roles> {
    throw new Error("Method not implemented.");
  }
  updateRoles(roles: Roles, roles_id: string): Promise<Roles> {
    throw new Error("Method not implemented.");
  }
  deleteRoles(roles_id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findAllRoles(): Promise<Roles[]> {
    throw new Error("Method not implemented.");
  }
  async createRoles(roles: Roles): Promise<Roles> {
    myDatabase.push(roles)
    return roles
  }
  async findOneRoles(roles_id: string): Promise<Roles> {
    const roles = myDatabase.find((e) => e.name === roles_id)
    return roles
  }

}

const spy = () => {
  let repo = new FakeRepository()
  let create = new CreateRolesService(repo)
  let update = new UpdateRolesService(repo)
  let remove = new DeleteRolesService(repo)
  return {
    create,
    update,
    remove
  }
}

describe('creation roles', () => {
  it('should return error when parameter is null', async () => {
    let { create } = spy()
    let result = await create.execute({ name: "", description: "" })
    expect(result).toBeInstanceOf(Error)
  });
  it('should return error when parameter is null', async () => {
    let { create } = spy()
    let result = await create.execute({ name: "roles", description: "description" })
    expect(result).toBeInstanceOf(Error)
  });
  it('should return error when roless exists in database', async () => {
    let { create } = spy()
    let result = await create.execute({ name: "read:allContent", description: "description" })
    expect(result).toBeInstanceOf(Error)
  });
  it('should return error when roless exists in database', async () => {
    let { create } = spy()
    let result = await create.execute({ name: "write:allContent", description: "description" })
    expect(result.name).toEqual("write:allContent")
  });

});

describe('update roles', () => {
  it('should return error when roles or id is null', async () => {
    let { update } = spy()
    let result = await update.execute({ name: "", description: "" }, "")
    expect(result).toBeInstanceOf(Error)
  });
  it('should return error when id does not exist', async () => {
    let { update } = spy()
    let result = await update.execute({ name: "write:allContent", description: "description" }, "123")
    expect(result).toBeInstanceOf(Error)
  });
});

describe('delete roles', () => {
  it('Should return error when id is null', async () => {
    let { remove } = spy()
    let result = await remove.execute("")
    expect(result).toBeInstanceOf(Error)
  });
  it('should return error when id does not exist', async () => {
    let { remove } = spy()
    let result = await remove.execute("123")
    expect(result).toBeInstanceOf(Error)
  });
});
