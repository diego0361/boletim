import { EntityRepository, Repository } from "typeorm";

import Student from "../entities/Student";

interface Iprops {
    registration: string
}

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
    public async findById (id: number){
        const student = await this.findOne({
            where: {
                id
            }
        });
        
        return student;
    }

    public async findByRegistration (registration: string){
        const student = await this.findOne({
            where:{
                registration
            }
        });

        return student;
    }

    public async findByRegistrationAnd ({registration}: Iprops){
        const studentRegistration = await this.findByRegistration(registration)
        if (studentRegistration) return true

        return false
    }
}