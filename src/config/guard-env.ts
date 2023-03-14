import { type ArgsEnvDB, type ArgsEnvPort, type ArgsEnvJWT } from '../types/types'
import { errorEnv } from '../helper/errors'

export const ENV_PORT = ({ port }: ArgsEnvPort): string => {
  const { PORT } = errorEnv
  if (!port) throw new Error(PORT)
  return port
}

export const ENV_DB = ({
  host,
  user,
  password,
  database
}: ArgsEnvDB): {
  host: string
  user: string
  password: string
  database: string
} => {
  const { HOST, DATABASE, PASSWORD, USER } = errorEnv.DB
  if (!host) throw new Error(HOST)
  if (!user) throw new Error(USER)
  if (!password) throw new Error(PASSWORD)
  if (!database) throw new Error(DATABASE)

  return {
    host,
    user,
    password,
    database
  }
}

export const ENV_JWT = ({ passJWT }: ArgsEnvJWT): string => {
  const { JWT } = errorEnv
  if (!passJWT) {
    throw new Error(JWT)
  }
  return passJWT
}
