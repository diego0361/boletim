import AppError from "@shared/Error/AppError";
import { getCustomRepository } from "typeorm";

import Teacher from "../typeorm/entities/Teacher";
import { TeachersRepository } from "../typeorm/repositories/TeacherRepository";

interface IProps {
    name: string
    age: number
    discipline: string
}

export class UpdatedTeacherService {
    public async execute(id:number, { name, age, discipline }:IProps): Promise<Teacher> {
        const teachersRepository = getCustomRepository(TeachersRepository);
        const teacher = await teachersRepository.findById(id);

        if(!teacher) {
            throw new Error('Professor não encontrado.')
        }

        teacher.name = name || teacher.name
        teacher.age = age || teacher.age
        teacher.discipline = discipline || teacher.discipline

        await teachersRepository.update(id, teacher)

        return teacher;
    }
}

export default UpdatedTeacherService;