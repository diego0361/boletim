import { getCustomRepository } from 'typeorm';

import Note from '../typeorm/entities/Note';
import { NotesRepository } from '../typeorm/repositories/NotesRepository';

interface IProps {
    value: number,
    description: string,
    id_teacher: number;
    id_student: number;
}

export class UpdateNotesService {
    public async execute(id: number, { value, description, id_teacher, id_student }:IProps): Promise<Note> {
        const noteRepository = getCustomRepository(NotesRepository);
        const note = await noteRepository.findById(id);
        const verify = await noteRepository.findById(id_teacher)

        if(!note){
            throw new Error('Nota incorreta.')
        }

        if(verify && (note.id_teacher !== id_teacher))
            throw new Error('Nota já cadastrada.')

        note.value = value
        note.description = description
        note.id_teacher = id_teacher
        note.id_student = id_student

        await noteRepository.update(id, note)

        return note
    } 
}

export default UpdateNotesService;