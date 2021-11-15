import { Request, Response } from 'express';
import { CreateRolesService } from '@services/role';
import { container } from '../../dependencies';

export class CreateRoleController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const create = container.resolve(CreateRolesService);

    const result = await create.execute({ name, description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}
