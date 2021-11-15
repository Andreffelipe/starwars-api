import { FindApiKeyUserService } from '@services/user';
import { Request, Response, NextFunction } from 'express';
import { container } from '../dependencies';

export const Authenticated = () => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const apiHeaders: string = request.headers['x-api-key'] as string;
    const authHeaders = request.headers.authorization;

    if (!apiHeaders || !authHeaders) {
      return response.status(401).json({ error: 'Token is missing' });
    }
    const token = apiHeaders ?? authHeaders.split(' ')[1];

    const user = container.resolve(FindApiKeyUserService);

    const result = await user.execute(token);
    console.log(result);
    if (!result || result instanceof Error) {
      return response.status(401).json({ error: 'not authorized' });
    }
    request.permission = result.permissions;
    request.roles = result.roles as string[];
    next();
  };
};
