import { EntityRepository, Repository } from "typeorm"; 

import Teacher from "../entities/Teacher";

interface Iprops {
    name: string,
    discipline: string
}

@EntityRepository(Teacher)
export class TeachersRepository extends Repository<Teacher> {
    public async findById (id: number){
        const teacher = await this.findOne({
            where: {
                id
            }
        });

        return teacher;
    }

    public async findByName (name: string){
        const teacher = await this.findOne({
            where: {
                name
            }
        });

        return teacher;
    }

    public async findByDiscipline (discipline: string){
        const teacher = await this.findOne({
            where: {
                discipline
            }
        });

        return teacher;
    }

    public async findByNameAndDiscipline ({name, discipline}: Iprops){
        const teacherName = await this.findByName(name)
        if (teacherName) return true

        const teacherDiscipline = await this.findByDiscipline(discipline)
        if (teacherDiscipline) return true
        
        return true;
    }
}