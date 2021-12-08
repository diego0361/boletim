import { Request, Response } from "express";
import {
    CreateStudentService,
    DeleteStudentService,
    ListStudentService,
    ShowStudentService,
    UpdateStudentService
} from "../services/index"

interface Data{
    name: string
    age: number
    sex: string
    registration: string
}

export class StudentController {
    public async index(request: Request, response: Response) {
        const listStudentService = new ListStudentService()

        const student = await listStudentService.execute()

        response.json(student)
    }

    public async create(request: Request, response: Response){
        const {
            name,
            age,
            sex,
            registration
        } = request.body

        const createStudentService = new CreateStudentService()

        const student = await createStudentService.execute({
            name,
            age,
            sex,
            registration
        })

        response.json(student)
    }

    public async update(request: Request, response: Response) {
        const {
            name,
            age,
            sex,
            registration
        } = request.body
        const {id} = request.params

        const updateStudentService = new UpdateStudentService()

        const student = await updateStudentService.execute(
            +id,
            {
              name,
              age,
              sex,
              registration
            }
        )
        response.json(student)
    }

    public async show(request: Request, response: Response) {
        const { id } = request.params

        const showStudentService = new ShowStudentService()

        const student = await showStudentService.execute(+id)

        response.json(student)
    }

    public async delete(request: Request, response: Response) {
        const { id } = request.params

        const deleteStudentService = new DeleteStudentService()

        const student = await deleteStudentService.execute(+id)

        response.json(student)
    }
}