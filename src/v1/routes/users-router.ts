import { postRegisterUser, postLoginUser } from '../../controllers/users-controller'
import { Router } from 'express'

export const usersRouter = Router()

usersRouter.post('/register', postRegisterUser)
usersRouter.post('/login', postLoginUser)
