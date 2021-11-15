import { Request, Response } from 'express';
import { FindUserService } from '@services/user';
import { container } from '../../dependencies';

export class FindController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const user = container.resolve(FindUserService);

    const result = await user.execute(name);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
