export default defineOAuthGitHubEventHandler({
    async onSuccess(event, { user }) {
        await setUserSession(event, { user })
        return sendRedirect(event, '/')
    },
    onError(event, error) {
        console.error('GitHub OAuth error:', error)
        return sendRedirect(event, '/')
    }
})