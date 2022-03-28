import { getCustomRepository } from 'typeorm';

import Note from '../typeorm/repositories/NotesRepository';
import { NotesRepository } from '../typeorm/repositories/NotesRepository';

export class ShowNoteService {
    public async execute(id: number): Promise<Note> {
        const notesRepository = getCustomRepository(NotesRepository);

        const note = await notesRepository.findById(id);

        if(!note){
            throw new Error("Usuario incorreto.");
        }

        return note;
    }
}