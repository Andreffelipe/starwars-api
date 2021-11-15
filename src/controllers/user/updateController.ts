import { UpdateUserService } from '@services/user/updateUserService';
import { Request, Response } from 'express';
import { container } from '../../dependencies';


export class UpdateController {

  async handle(request: Request, response: Response) {
    const { name, permission, rule } = request.body;

    const user = container.resolve(UpdateUserService);

    const result = await user.execute(name, permission, rule);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(200).json({});
  }
}

