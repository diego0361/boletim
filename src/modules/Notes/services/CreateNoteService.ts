import { getCustomRepository } from 'typeorm';
import Note from '../typeorm/entities/Note';
import { NotesRepository } from '../typeorm/repositories/NotesRepository';

interface Iprops {
    value: number;
    description: string;
}

export class CreateNoteService {
    public async execute({ value, description}:Iprops): Promise <Note>{
        const noteRepository = getCustomRepository(NotesRepository);

        const notes = await noteRepository.findByDescription(description)

        if(!value) throw new Error('Nota já cadastrada.')
        
        const note = noteRepository.create({
            value,
            description
        })

        

        await noteRepository.save(note)


        return note; 
    }
}