import { NextFunction, Request, Response } from 'express'
import { getNotes, getOneNote, updateNote, deleteNote, createNote } from '../services'
import { type Note } from '../types/types'
import { ERRORS } from '../helper/errors'

const { noteNotFound, withoutTitleAndContent, noteNotCreated } = ERRORS

export const getAllNotes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { userId } = req.body as { userId: number }
  try {
    const allNotes = await getNotes({ userId })
    res.status(200).json(allNotes)
  } catch (e) {
    next(e)
  }
}

export const getOneNoteById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params
  const { userId } = req.body
  try {
    const [note] = await getOneNote({ userId, id: Number(id) })
    if (!note) {
      next(noteNotFound.error)
      return
    }
    res.status(200).json(note)
  } catch (e) {
    next(e)
  }
}

export const putOneNoteById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params
  const { title, content, userId } = req.body as Note & { userId: number }

  if (!title || !content) {
    next(withoutTitleAndContent.error)
    return
  }

  try {
    const result = await updateNote({ title, content, userId, id: Number(id) })
    if (!result.affectedRows) {
      next(noteNotFound.error)
    } else {
      res.status(200).json({ message: 'Note updated' })
    }
  } catch (e) {
    next(e)
  }
}

export const deleteOneNoteById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params
  const { userId } = req.body as { userId: number }
  try {
    const result = await deleteNote({ userId, id: Number(id) })
    if (!result.affectedRows) {
      next(noteNotFound.error)
    } else {
      res.status(200).json({ message: 'Note deleted' })
    }
  } catch (e) {
    next(e)
  }
}

export const postNewNote = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { title, content, userId } = req.body as Note & { userId: number }
  if (!title || !content) {
    next(withoutTitleAndContent.error)
    return
  }
  try {
    const result = await createNote({ title, content, userId })
    if (!result.insertId) {
      next(noteNotCreated.error)
    } else {
      res.status(201).json({ message: 'Note created' })
    }
  } catch (e) {
    next(e)
  }
}
