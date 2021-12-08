import AppError from "@shared/Error/AppError";
import { getCustomRepository } from "typeorm";

import Student from "../typeorm/entities/Student";
import { StudentRepository } from "../typeorm/repositories/StudentsRepository";

export class ShowStudentService {
    public async execute(id: number): Promise<Student> {
        const studentRepository = getCustomRepository(StudentRepository);

        const student = await studentRepository.findById(id);

        if (!student) {
            throw new AppError('Aluno não cadastrado.')
        }

        return student;
    }
}