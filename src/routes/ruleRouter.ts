
import { createRuleController, findRuleController } from '@controllers/role';
import { Router, Request, Response } from 'express';
import { Authenticated } from '../middleware/authenticated';
const ruleRouter = Router();

ruleRouter.get('/', async (request: Request, response: Response) => {
  return await findRuleController.handle(request, response);
});

ruleRouter.get('/:id', async (request: Request, response: Response) => {
  return await findRuleController.handle(request, response);
});

ruleRouter.post('/', Authenticated(), async (request: Request, response: Response) => {
  return await createRuleController.handle(request, response);
});

export { ruleRouter };
