import AppError from "@shared/Error/AppError";
import { getCustomRepository } from "typeorm";

import Student from "../typeorm/entities/Student";
import { StudentRepository } from "../typeorm/repositories/StudentsRepository";

interface IProps {
    name: string
    age: number
    sex: string
    registration: string
}

export class UpdateStudentService {
    public async execute(id: number, { name, age, sex, registration }:IProps): Promise<Student>{
        const studentRepository = getCustomRepository(StudentRepository);
        const student = await studentRepository.findById(id);

        if (!student){
            throw new AppError('Aluno inexistente.')
        }

        student.name = name || student.name
        student.age = age || student.age
        student.sex = sex || student.sex

        await studentRepository.update(id, student)

        return student;
    }
}

export default UpdateStudentService;