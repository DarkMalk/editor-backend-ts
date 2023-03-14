import { ResultSetHeader } from 'mysql2'
import { con } from '../config/mysql-connection'

export async function createNote({
  title,
  content,
  userId
}: {
  title: string
  content: string
  userId: number
}): Promise<ResultSetHeader> {
  const [result] = await (
    await con
  ).execute('insert into notes (title, content, created_by) values (?, ?, ?)', [title, content, userId])
  return result as ResultSetHeader
}
