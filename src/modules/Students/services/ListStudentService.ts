import { getCustomRepository } from "typeorm"

import Student from "../typeorm/entities/Student"
import { StudentRepository } from "../typeorm/repositories/StudentsRepository"

export class ListStudentService {
    public async execute(): Promise<Student[]> {
        const studentRepository = getCustomRepository(StudentRepository);

        const student = await studentRepository.find()

        return student;
    }
}


