import {sqliteTable, text, integer, primaryKey} from 'drizzle-orm/sqlite-core'
import {relations, sql} from "drizzle-orm";


export const users = sqliteTable('users', {
    id: integer('id').primaryKey({autoIncrement: true}),
    githubId: integer('github_id').unique(),
    githubToken: text('github_token'),
    userName: text('username'),
    createdAt: text('created_at')
        .notNull()
        .$defaultFn(() => sql`(current_timestamp)`),
    updatedAt: text('updated_at')
        .notNull()
        .$defaultFn(() => sql`(current_timestamp)`)
        .$onUpdateFn(() => sql`(current_timestamp)`),
})
export const usersRelations = relations(users, ({many}) => {
    return {
        skills: many(skills)
    }
})
export const skills = sqliteTable('skills', {
    id: integer('id').primaryKey({autoIncrement: true}).notNull(),
    name: text('name').notNull(),
    logoName: text('logo_name').notNull(),
    description: text('description'),
})

export const skillsRelations = relations(skills, ({many}) => {
    return {
        users: many(users)
    }
})

export const usersSkills = sqliteTable('users_skills', {
    userId: integer("user_id").references(() => users.id, {onUpdate: 'no action', onDelete: 'no action'}).notNull(),
    skillId: integer("skill_id").references(() => skills.id, {onUpdate: 'no action', onDelete: 'no action'}).notNull(),
}, (table) => {
    return {
        pk: primaryKey({name: 'pk_users_skills', columns: [table.userId, table.skillId]}),
    };
})

export const usersSkillsRelations = relations(usersSkills, ({one}) => {
    return {
        user: one(users,{
            fields:[usersSkills.userId],
            references:[users.id]
        }),
        skill: one(skills,{
            fields:[usersSkills.skillId],
            references:[skills.id]
        })
    }
})