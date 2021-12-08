import AppError from "@shared/Error/AppError";
import { getCustomRepository } from "typeorm";

import Teacher from "../typeorm/entities/Teacher";
import { TeachersRepository } from "../typeorm/repositories/TeacherRepository";

interface IProps {
    name: string
    age: number
    discipline: string
}

export class CreatTeacherService {
    public async execute({ name, age, discipline }:IProps): Promise<Teacher> {
        
        const teachersRepository = getCustomRepository(TeachersRepository)

        const verify = await teachersRepository.findByNameAndDiscipline({name, discipline})
        
        if(!verify) throw new AppError('Professor já cadastrado.')
        
        const teacher = teachersRepository.create({
            name,
            age,
            discipline
        })

        await teachersRepository.save(teacher)

        return teacher;

        
    }
}