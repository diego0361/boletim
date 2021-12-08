import { getCustomRepository } from "typeorm";

import Teacher from "../typeorm/entities/Teacher";
import { TeachersRepository } from "../typeorm/repositories/TeacherRepository";

export class ListTeachersService {
    public async execute(): Promise<Teacher[]> {
        const teachersRepository = getCustomRepository(TeachersRepository);

        const teachers = await teachersRepository.find();

        return teachers;
    }
}