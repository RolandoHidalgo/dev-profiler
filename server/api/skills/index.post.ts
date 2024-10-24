export default defineEventHandler(async event => {
    const {user}= await requireUserSession(event);
    const dbUser = await useDrizzle().select().from(tables.users).where(eq(tables.users.githubId,user.id)).get()
    if(!dbUser) throw createError({
        statusCode: 404,
        statusMessage: 'User not fund'
    })

    const body = await readBody(event)
    await useDrizzle().insert(tables.usersSkills).values({
        userId: dbUser.id,
        skillId:body.skillId
    })

})