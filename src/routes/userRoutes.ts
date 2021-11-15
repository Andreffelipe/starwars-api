import { Router, Request, Response } from 'express';
import {
  createController,
  findController,
  updateController,
  deleteController
} from '@controllers/user';

const userRouter = Router();

userRouter.post('/find', async (request: Request, response: Response) => {
  return await findController.handle(request, response);
});

userRouter.post('/', async (request: Request, response: Response) => {
  return await createController.handle(request, response);
});

userRouter.put('/', async (request: Request, response: Response) => {
  return await updateController.handle(request, response);
});

userRouter.delete('/', async (request: Request, response: Response) => {
  return await deleteController.handle(request, response);
});

export { userRouter };
