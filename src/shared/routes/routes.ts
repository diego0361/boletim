import {Router} from 'express';
import NoteRoutes from '@modules/Notes/routes/NoteRoutes' 

const routes = Router();

//routes.use('/student', StudentRoutes);
//routes.use('/teacher', TeacherRouts);
routes.use('/notes', NoteRoutes);

export default routes;