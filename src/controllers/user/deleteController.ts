import { DeleteUserService } from '@services/user/deleteUserService';
import { Request, Response } from 'express';
import { container } from '../../dependencies';

export class DeleteController {

  async handle(request: Request, response: Response) {
    const { id } = request.body;
    const user = container.resolve(DeleteUserService);

    const result = await user.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json({});
  }
}
