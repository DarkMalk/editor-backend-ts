import { con } from '../config/mysql-connection'
import bcrypt from 'bcrypt'
import { ResultSetHeader } from 'mysql2'

export async function createUser({
  username,
  email,
  password
}: {
  username: string
  email: string
  password: string
}): Promise<ResultSetHeader> {
  const passwordHash = await bcrypt.hash(password, 10)
  const [result] = await (
    await con
  ).execute('insert into users (username, email, password) values (?, ?, ?)', [username, email, passwordHash])
  return result as ResultSetHeader
}
