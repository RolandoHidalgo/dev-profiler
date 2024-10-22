import {useOctokit} from "~/server/utils/github";

export default defineOAuthGitHubEventHandler({
    async onSuccess(event, {user, tokens}) {

        const dbUser = await useDrizzle().select().from(tables.users)
            .where(eq(tables.users.githubId, user.id)).get()
        if (!dbUser) {
            await useDrizzle().insert(tables.users).values({
                githubId: user.id,
                githubToken: tokens.access_token
            });

        } else {
            await useDrizzle().update(tables.users).set({
                githubToken: tokens.access_token
            })
        }
        useOctokit(tokens.access_token);

        useDrizzle()
        await setUserSession(event, {user})
        return sendRedirect(event, `/profile/${user.login}`)
    },
    onError(event, error) {
        console.error('GitHub OAuth error:', error)
        return sendRedirect(event, '/')
    }
})