import { Request, Response } from 'express';
import { FindRolesService } from '@services/role';
import { container } from '../../dependencies';

export class FindRoleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const find = container.resolve(FindRolesService);

    const result = await find.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
