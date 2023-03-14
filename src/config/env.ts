import { ENV_DB, ENV_PORT, ENV_JWT } from './guard-env'
import 'dotenv/config'

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, SERVER_PORT, JWT } = process.env

export const PORT = ENV_PORT({ port: SERVER_PORT })
export const DB = ENV_DB({ host: DB_HOST, user: DB_USER, password: DB_PASSWORD, database: DB_DATABASE })
export const PASSJWT = ENV_JWT({ passJWT: JWT })
