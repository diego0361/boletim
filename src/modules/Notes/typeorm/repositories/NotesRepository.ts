import { EntityRepository, Repository } from "typeorm";

import Note from '../entities/Note'

interface Iprops {
    description: string;
}

@EntityRepository(Note)
export class NotesRepository extends Repository<Note> {
    public async findById (id: number){
        const note = await this.findOne({
            where: {
                id
            }
        }) 

        return note;
    }

    public async findByDescription (description: string){
        const note = await this.findOne({
            where: {
                description
            }
        })

        return note;
    }

    public async findByDescriptionAnd ({description}: Iprops){
        const noteDescription = await this.findByDescription(description)

        if (noteDescription) return true

        return false;    
    }

}
export default Note;