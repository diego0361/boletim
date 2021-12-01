import { getCustomRepository } from "typeorm";

import Note from "../typeorm/entities/Note"
import { NotesRepository } from "../typeorm/repositories/NotesRepository";

export class DeleteNoteService{
    public async execute(id: number): Promise<Note> {
        const notesRepository = getCustomRepository(NotesRepository)
        const note = await notesRepository.findById(id);

        if(!note) {
            throw new Error("Nota não encontrada.");
        }
        await notesRepository.remove(note)

        return note
    }
}
