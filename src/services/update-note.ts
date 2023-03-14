import { ResultSetHeader } from 'mysql2'
import { con } from '../config/mysql-connection'

export async function updateNote({
  title,
  content,
  id,
  userId
}: {
  title: string
  content: string
  id: number
  userId: number
}): Promise<ResultSetHeader> {
  const [result] = await (
    await con
  ).execute('update notes set title = ?, content = ? where created_by = ? and id = ?', [title, content, userId, id])
  return result as ResultSetHeader
}
