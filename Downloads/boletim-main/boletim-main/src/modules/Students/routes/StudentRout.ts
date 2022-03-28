import { Router } from "express";
import { StudentController } from "../controllers/StudentController";

const routes = Router();

const studentController = new StudentController();

routes.get('/', studentController.index);
routes.post('/', studentController.create);
routes.put('/:id', studentController.update);
routes.get('/:id', studentController.show);
routes.delete('/:id', studentController.delete);

export default routes