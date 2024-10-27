import {z} from "zod";
import { eq, and } from 'drizzle-orm'
export default defineEventHandler(async (event) => {
    const {id: skillId} = await getValidatedRouterParams(event, z.object({id: z.coerce.number()}).parse)
    const {user} = await requireUserSession(event);


    const deletedSkill = await useDrizzle()
        .delete(tables.usersSkills)
        .where(and(
            eq(tables.usersSkills.skillId, skillId),
            eq(tables.usersSkills.userId, 1)
        )).returning({id: tables.usersSkills.skillId})
        .get()

    if (!deletedSkill) {
        throw createError({
            statusCode: 404,
            message: 'Todo not found'
        })
    }
    return deletedSkill;

})