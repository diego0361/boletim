import { EntityRepository, Repository } from "typeorm";

import Note from '../entities/Note'

interface Iprops {
    description: string;
    id_teacher: number;
    id_student: number;
}

@EntityRepository(Note)
export class NotesRepository extends Repository<Note> {
    public async findById (id: number){
        const note = await this.findOne({
            where: {
                id
            },
            relations: ["id_student", "id_teacher"]
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

    public async findByIdTeacher (id_teacher: number){
        const note = await this.findOne({
            where: {
                id_teacher
            }
        })

        return note;
    }

    public async findByIdStudent (id_student: number){
        const note = await this.findOne({
            where: {
                id_student
            }
        })

        return note;
    }

    public async findByDescriptionAndId ({description, id_teacher, id_student}: Iprops){
        const noteDescription = await this.findByDescription(description)
        if (noteDescription) return true

        const noteIdTeacher = await this.findByIdTeacher(id_teacher)
        if (noteIdTeacher) return true

        const noteIdStudent = await this.findByIdStudent(id_student)
        if (noteIdStudent) return true

        return false;    
    }

}
export default Note;