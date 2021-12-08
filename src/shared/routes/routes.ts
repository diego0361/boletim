import {Router} from 'express';
import NoteRoutes from '@modules/Notes/routes/NoteRoutes' 
import StudentRout from '@modules/Students/routes/StudentRout';
import TeachersRouts from '@modules/Teachers/routes/TeachersRouts';

const routes = Router();

routes.use('/student', StudentRout);
routes.use('/teacher', TeachersRouts);
routes.use('/notes', NoteRoutes);

export default routes;