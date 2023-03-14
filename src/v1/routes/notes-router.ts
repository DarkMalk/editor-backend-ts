import {
  getAllNotes,
  getOneNoteById,
  putOneNoteById,
  deleteOneNoteById,
  postNewNote
} from '../../controllers/notes-controller'
import { Router } from 'express'

export const notesRouter = Router()

notesRouter.get('/', getAllNotes)
notesRouter.post('/', postNewNote)
notesRouter.get('/:id', getOneNoteById)
notesRouter.put('/:id', putOneNoteById)
notesRouter.delete('/:id', deleteOneNoteById)
