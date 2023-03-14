import { Request, Response, NextFunction } from 'express'
import { type DecodedToken } from '../types/types'
import { ERRORS } from '../helper/errors'
import { PASSJWT } from '../config/env'
import jwt from 'jsonwebtoken'

const { withoutToken } = ERRORS

export const userExtractor = (req: Request, _: Response, next: NextFunction) => {
  const { authorization } = req.headers
  const token = authorization?.split(' ')[1]

  if (!token) {
    next(withoutToken.error)
    return
  }

  try {
    const decodedToken = jwt.verify(token, PASSJWT)
    const { id } = decodedToken as DecodedToken
    req.body.userId = id
  } catch (e) {
    next(e)
  }

  next()
}
