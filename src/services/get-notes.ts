import { con } from '../config/mysql-connection'
import { type Note } from '../types/types'

export async function getNotes({ userId }: { userId: number }): Promise<Note[]> {
  const [results] = await (await con).execute('select * from notes where created_by = ?', [userId])
  return results as Note[]
}
