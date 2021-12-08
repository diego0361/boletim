import { TeachersRepository } from '@modules/Teachers/typeorm/repositories/TeacherRepository';
import { getCustomRepository } from 'typeorm';

import Note from '../typeorm/entities/Note';
import { NotesRepository } from '../typeorm/repositories/NotesRepository';

interface Iprops {
    value: number;
    description: string;
    id_teacher: number;
    id_student: number;
}

export class CreateNoteService {
    public async execute({ value, description, id_teacher, id_student}:Iprops): Promise <Note>{
        const noteRepository = getCustomRepository(NotesRepository);
        const teachersRepository = getCustomRepository(TeachersRepository)

        const teacher = await teachersRepository.findById(id_teacher)

        if(!teacher) throw new Error('Professor não existe.')
        
        const note = noteRepository.create({
            value,
            description, 
            id_teacher: teacher,
            id_student
        })

        await noteRepository.save(note)


        return note; 
    }
}