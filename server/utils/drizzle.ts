import { drizzle } from 'drizzle-orm/d1'
export { sql, eq, and, or } from 'drizzle-orm'

import * as schema from '../db/schema'
import { db} from 'hub:db'
export const tables = schema

export function useDrizzle() {
    return drizzle(db, { schema })
}

export type User = typeof schema.users.$inferSelect
