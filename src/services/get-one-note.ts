import { con } from '../config/mysql-connection'
import { type Note } from '../types/types'

export async function getOneNote({ userId, id }: { userId: number; id: number }): Promise<Note[]> {
  const [results] = await (await con).execute('select * from notes where created_by = ? and id = ?', [userId, id])
  return results as Note[]
}
