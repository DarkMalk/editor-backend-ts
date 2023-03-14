export const errorEnv = {
  PORT: '[PORT] Variable de entorno es requerido!',
  DB: {
    HOST: '[DB_HOST] Variable de entorno es requerido!',
    USER: '[DB_USER] Variable de entorno es requerido!',
    PASSWORD: '[DB_PASSWORD] Variable de entorno es requerido!',
    DATABASE: '[DB_DATABASE] Variable de entorno es requerido!'
  },
  JWT: '[JWT] Variable de entorno es requerido!'
}

// export const errorRegister = {
//   dup_email: { error: 'Este correo ya ha sido utilizado' },
//   dup_user: { error: 'Este usuario ya ha sido utilizado' }
// }

export const ERRORS = {
  noteNotFound: {
    error: new Error('Note not found'),
    statusCode: 404,
    res: { error: 'Note not found' }
  },
  withoutTitleAndContent: {
    error: new Error('Without title and content'),
    statusCode: 400,
    res: { error: 'Title and content is required!' }
  },
  noteNotCreated: {
    error: new Error('Note not created'),
    statusCode: 400,
    res: { error: 'Note not created' }
  },
  withoutParametersRegisterUser: {
    error: new Error('Username, email and password is required'),
    statusCode: 400,
    res: { error: 'Username, email and password is required!' }
  },
  withoutParametersLoginUser: {
    error: new Error('Email and password is required'),
    statusCode: 400,
    res: { error: 'Email and password is required!' }
  },
  userNotCreated: {
    error: new Error('User not created'),
    statusCode: 500,
    res: { error: 'User not created' }
  },
  userNotValid: {
    error: new Error('Email or password incorrect'),
    statusCode: 400,
    res: { error: 'Email or password incorrect' }
  },
  withoutToken: {
    error: new Error('Token is missing'),
    statusCode: 401,
    res: { Error: 'Token is missing' }
  },
  errorDefault: {
    statusCode: 500,
    res: { error: 'An error has ocurred!' }
  }
}
