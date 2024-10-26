export default defineEventHandler(async event => {
    const body = await readBody(event)
    await useDrizzle().delete(tables.usersSkills).where(and(eq(tables.usersSkills.skillId, body.skillId), eq(tables.usersSkills.userId, 1))).returning().get()
    return body.skillId;
})
