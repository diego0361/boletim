import { Router } from "express"
import { TeachersController } from "../controllers/TeachersController"

const routes = Router();

const teachersController = new TeachersController();

routes.get('/', teachersController.index);
routes.post('/', teachersController.create);
routes.put('/:id', teachersController.update);
routes.get('/:id', teachersController.show);
routes.delete('/:id', teachersController.delete);

export default routes