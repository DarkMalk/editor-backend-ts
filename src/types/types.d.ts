export type ArgsEnvPort = {
  port: string | undefined
}

export type ArgsEnvDB = {
  host: string | undefined
  user: string | undefined
  password: string | undefined
  database: string | undefined
}

export type ArgsEnvJWT = {
  passJWT: string | undefined
}

export type DecodedToken = {
  id: number
  email: string
}

export interface User {
  id: number
  username: string
  email: string
  password: string
  created_at: Date
}

export interface Note {
  id: number
  title: string
  content: string
  created_at: Date
  created_by: number
}
