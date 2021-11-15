import { CreateUserService } from '@services/user';
import { Request, Response } from 'express';
import { container } from '../../dependencies';

export class CreateController {
  async handle(request: Request, response: Response) {
    const { name, roles_id } = request.body;
    const user = container.resolve(CreateUserService);
    const result = await user.execute(name, roles_id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}
