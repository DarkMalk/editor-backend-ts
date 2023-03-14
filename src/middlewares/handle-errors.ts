import { NextFunction, Request, Response } from 'express'
import { ERRORS } from '../helper/errors'

const {
  noteNotFound,
  withoutTitleAndContent,
  noteNotCreated,
  withoutParametersRegisterUser,
  withoutParametersLoginUser,
  userNotCreated,
  userNotValid,
  withoutToken,
  errorDefault
} = ERRORS

export const handleErrors = (error: Error, _: Request, res: Response, next: NextFunction): void => {
  if (error.message === noteNotFound.error.message) {
    res.status(noteNotFound.statusCode).json(noteNotFound.res)
    return
  }
  if (error.message === withoutTitleAndContent.error.message) {
    res.status(withoutTitleAndContent.statusCode).json(withoutTitleAndContent.res)
    return
  }
  if (error.message === noteNotCreated.error.message) {
    res.status(noteNotCreated.statusCode).json(noteNotCreated.res)
    return
  }
  if (error.message === withoutParametersRegisterUser.error.message) {
    res.status(withoutParametersRegisterUser.statusCode).json(withoutParametersRegisterUser.res)
    return
  }
  if (error.message === withoutParametersLoginUser.error.message) {
    res.status(withoutParametersLoginUser.statusCode).json(withoutParametersLoginUser.res)
    return
  }
  if (error.message === userNotCreated.error.message) {
    res.status(userNotCreated.statusCode).json(userNotCreated.res)
    return
  }
  if (error.message === userNotValid.error.message) {
    res.status(userNotValid.statusCode).json(userNotValid.res)
    return
  }
  // JWT errors
  if (error.message === withoutToken.error.message || error.message === 'jwt must be provided') {
    res.status(withoutToken.statusCode).json(withoutToken.res)
    return
  }
  if (error.message === 'invalid signature' || error.message === 'jwt malformed') {
    res.status(401).json({ error: 'Token is invalid' })
    return
  }
  if (error.name === 'TokenExpirerError') {
    res.status(401).json({ error: 'Token expirer' })
    return
  }
  if (/Duplicate entry/.test(error.message) && /users.username/.test(error.message)) {
    res.status(409).json({ error: 'Username in use' })
    return
  }
  if (/Duplicate entry/.test(error.message) && /users.email/.test(error.message)) {
    res.status(409).json({ error: 'Email in use' })
    return
  }

  // default
  else {
    console.error(error.message)
    res.status(errorDefault.statusCode).json(errorDefault.res)
    return
  }
  next()
}

// error es: Duplicate entry 'example' for key 'users.username'
