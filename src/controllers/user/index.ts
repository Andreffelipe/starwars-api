import { CreateController } from './createController';
import { FindController } from './findController';
import { UpdateController } from './updateController';
import { DeleteController } from './deleteController';

const createController = new CreateController();
const findController = new FindController();
const updateController = new UpdateController();
const deleteController = new DeleteController();

export {
  createController,
  findController,
  updateController,
  deleteController
};
