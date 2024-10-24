import {getTableColumns} from "drizzle-orm";

export default defineEventHandler(async event => {
    const body = await readBody(event)
    return useDrizzle().select({...getTableColumns(tables.skills)})
        .from(tables.usersSkills)
        .leftJoin(tables.skills, eq(tables.usersSkills.skillId, tables.skills.id))
        .leftJoin(tables.users, eq(tables.usersSkills.userId, tables.users.id))
        .where(eq(tables.users.userName,body.userName))
        .all();

})