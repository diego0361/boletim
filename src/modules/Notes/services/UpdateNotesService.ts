import { getCustomRepository } from 'typeorm';

import Note from '../typeorm/entities/Note';
import { NotesRepository } from '../typeorm/repositories/NotesRepository';

interface IProps {
    value: number,
    description: string,
}

export class UpdateNotesService {
    public async execute(id: number, { value, description}:IProps): Promise<Note> {
        const noteRepository = getCustomRepository(NotesRepository);
        const note = await noteRepository.findById(id);

        if(!note){
            throw new Error('Nota incorreta.')
        }

        note.value = value
        note.description = description

        await noteRepository.update(id, note)

        return note
    } 
}

export default UpdateNotesService;