import { Router } from "express";
import { NotesController } from "../controllers/NotesController";

const route = Router();

const notesController = new NotesController();

route.get('/', notesController.index);
route.post('/', notesController.create);
route.put('/:id', notesController.update);
route.get('/:id', notesController.show);
route.delete('/:id', notesController.delete);

export default route