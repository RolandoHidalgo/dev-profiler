import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import {sql} from "drizzle-orm";

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    githubId: integer('github_id').unique(),
    githubToken: text('github_token'),
    createdAt: text('created_at')
        .notNull()
        .$defaultFn(() => sql`(current_timestamp)`),
    updatedAt: text('updated_at')
        .notNull()
        .$defaultFn(() => sql`(current_timestamp)`)
        .$onUpdateFn(() => sql`(current_timestamp)`),
})