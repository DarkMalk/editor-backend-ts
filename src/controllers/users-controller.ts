import { createUser, getUser } from '../services'
import { Request, Response, NextFunction } from 'express'
import { type User } from '../types/types'
import { PASSJWT } from '../config/env'
import { ERRORS } from '../helper/errors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const { withoutParametersRegisterUser, withoutParametersLoginUser, userNotCreated, userNotValid } = ERRORS

export const postRegisterUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { username, email, password } = req.body as User
  if (!username || !email || !password) {
    next(withoutParametersRegisterUser.error)
    return
  }
  try {
    const result = await createUser({ username, email, password })
    if (!result.affectedRows) {
      next(userNotCreated.error)
    } else {
      res.status(200).json({ message: 'User created' })
    }
  } catch (e) {
    next(e)
  }
}

export const postLoginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { email, password } = req.body as User
  if (!email || !password) {
    next(withoutParametersLoginUser.error)
    return
  }
  try {
    const [user] = await getUser({ email })

    const confirmUser = user ? await bcrypt.compare(password, user.password) : false

    if (!confirmUser) {
      next(userNotValid.error)
      return
    }

    const userForToken = { id: user.id, email: user.email }
    const token = jwt.sign(userForToken, PASSJWT, {
      expiresIn: 60 * 60 * 24 * 7
    })

    res.status(200).json({ email: user.email, username: user.username, token })
  } catch (e) {
    next(e)
  }
}
