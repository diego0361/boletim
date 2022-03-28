import { getCustomRepository } from "typeorm";

import Note from '../typeorm/entities/Note';
import { NotesRepository } from '../typeorm/repositories/NotesRepository'

export class ListNotesService {
    public async execute(): Promise<Note[]> {
        const notesRepository = getCustomRepository(NotesRepository);

        const notes = await notesRepository.find({
            relations: ["id_student", "id_teacher"],
        });

        return notes;
    }
}