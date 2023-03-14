import { con } from '../config/mysql-connection'
import { User } from '../types/types'

export async function getUser({ email }: { email: string }): Promise<User[]> {
  const [results] = await (await con).execute('select * from users where email = ?', [email])
  return results as User[]
}
