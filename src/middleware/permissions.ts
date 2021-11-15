import { NextFunction, Request, Response } from 'express';

export function can(permissionsRoutes: string) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { permission } = request;

    const result = permission.find((permission) => permission === permissionsRoutes);
    if (!result) {
      return response.status(401).end();
    }
    return next();
  };
}

export function is(rolesRoutes: string[]) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { roles } = request;

    const roleExists = roles
      .some((role) => rolesRoutes.includes(role));

    if (!roleExists) {
      return response.status(401).end();
    }

    return next();
  };
}
