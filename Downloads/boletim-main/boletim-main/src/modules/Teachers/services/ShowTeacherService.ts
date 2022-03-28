import AppError from "@shared/Error/AppError";
import { getCustomRepository } from "typeorm";

import Teacher from "../typeorm/entities/Teacher";
import { TeachersRepository } from "../typeorm/repositories/TeacherRepository";

export class ShowTeachersService {
    public async execute(id: number): Promise<Teacher>{
        const teachersRepository = getCustomRepository(TeachersRepository);

        const teacher = await teachersRepository.findById(id);

        if(!teacher) {
            throw new AppError('Professor não existe.')
        }

        return teacher;
    }
}