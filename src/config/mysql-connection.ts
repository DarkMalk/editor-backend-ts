import mysql from 'mysql2/promise'
import { DB } from './env'

const { host, user, password, database } = DB

export const con = mysql.createConnection({ host, user, password, database })
