import { ResultSetHeader } from 'mysql2'
import { con } from '../config/mysql-connection'

export async function deleteNote({ userId, id }: { userId: number; id: number }): Promise<ResultSetHeader> {
  const [results] = await (await con).execute('delete from notes where created_by = ? and id = ?', [userId, id])
  return results as ResultSetHeader
}
