export default defineEventHandler(async event => {
    const {user} = await requireUserSession(event);


        // const {data} = await octokit.request('GET /search/repositories', {
        //     // To exclude the pull requests to your repositories
        //     // q: `type:pr+author:"${user.username}"+-user:"${user.username}"`,
        //     // To include the pull requests to your repositories
        //     q: `user:"${user.login}"`,
        //     sort: 'stars',
        //     order: 'desc',
        //     per_page: 5
        //
        //
        // });
        const data = await $fetch<{items:[{name:string,description:string,stargazers_count:number}]}>(`https://api.github.com/search/repositories?q=user:${user.login}&sort=stars&order=desc&per_page=5`)

        return data.items.map(e => {

            return {
                name: e.name,
                description:e.description,
                stars:e.stargazers_count
            }
        });


})