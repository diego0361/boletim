import AppError from "@shared/Error/AppError";
import { getCustomRepository } from "typeorm";

import Student from "../typeorm/entities/Student";
import { StudentRepository } from "../typeorm/repositories/StudentsRepository";

interface IProps{
    name: string
    age: number
    sex: string
    registration: string
} 

export class CreateStudentService {
    public async execute({ name, age, sex, registration}: IProps): Promise<Student> {
        const studentsRepository = getCustomRepository(StudentRepository);

        const verify = await studentsRepository.findByRegistrationAnd({registration})
        
        if(verify) throw new AppError('Aluno já cadastrado.')

        const student = studentsRepository.create({
            name,
            age,
            sex,
            registration
        })

        await studentsRepository.save(student)

        return student;
    }
}