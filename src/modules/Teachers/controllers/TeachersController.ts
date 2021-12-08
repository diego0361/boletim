import { Request, Response } from "express";
import {
    CreatTeacherService,
    DeleteTeacherService,
    ListTeachersService,
    ShowTeachersService,
    UpdatedTeacherService
} from "../services"

interface Data{
    name: string
    age: number
    discipline: string
}

export class TeachersController {
    public async index(request: Request, response: Response){
        const listTeachersService = new ListTeachersService();

        const teacher = await listTeachersService.execute();

        response.json(teacher)
    }

    public async create(request: Request, response: Response){
        const {
            name,
            age,
            discipline
        } = request.body

        const creatTeacherService = new CreatTeacherService()

        const teacher = await creatTeacherService.execute({
            name,
            age,
            discipline
        })

        response.json(teacher)
    }

    public async update(request: Request, response: Response) {
        const {
            name, 
            age, 
            discipline
        } = request.body
        const { id } = request.params

        const updatedTeacherService = new UpdatedTeacherService()

        const teacher = await updatedTeacherService.execute(
            +id,
            {
                name,
                age,
                discipline
            }
        )

        response.json(teacher)
    }

    public async show(request: Request, response: Response){
        const { id } = request.params

        const showTeachersService = new ShowTeachersService()

        const teacher = await showTeachersService.execute(+id)

        response.json(teacher)
    }

    public async delete(request: Request, response: Response){
        const { id } = request.params

        const deleteTeacherService = new DeleteTeacherService()

        const teacher = await deleteTeacherService.execute(+id)

        response.json(teacher)
    }
}