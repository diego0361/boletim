import { Request, Response } from 'express';

import {
    CreateNoteService,
    DeleteNoteService,
    ListNotesService,
    ShowNoteService,
    UpdateNotesService
} from '../services'

interface Data{
    value: number,
    description: string,
    id_teacher: number,
    id_student: number,
}

export class NotesController {
    public async index(request: Request, response: Response){
        const listNotesService = new ListNotesService()
        
        const note = await listNotesService.execute()
        
        response.json(note)
    }

    public async create(request: Request, response: Response){

        const {
            value,
            description,
            id_teacher,
            id_student,
        } = request.body

        const createNoteService = new CreateNoteService()

        const note = await createNoteService.execute({
            value,
            description,
            id_teacher,
            id_student,
        })

        response.json(note)
    }

    public async update (request: Request, response: Response) {
        const {
            value,
            description, 
            id_teacher,
            id_student
        } = request.body
        const { id } = request.params

        const updateNotesService = new UpdateNotesService()

        const note = await updateNotesService.execute(
            +id,
            {
                value,
                description,
                id_teacher,
                id_student
            }
        )

        response.json(note)
    }

    public async show(request: Request, response: Response) {
        const { id } = request.params

        const showNoteService = new ShowNoteService()

        const note = await showNoteService.execute(+id)

        response.json(note)
    }

    public async delete(request: Request, response: Response){
        const { id } = request.params

        const deleteNoteService = new DeleteNoteService()

        const note = await deleteNoteService.execute(+id)

        response.json(note)
    }
}