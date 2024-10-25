import {Octokit} from 'octokit'

let _octokit: Octokit

export function useOctokit() {
    if (!_octokit) {
        _octokit = new Octokit()

    }
    return _octokit
}

export async function getUserRepos(user: string) {
    const octokit = useOctokit();
    return octokit.request('GET /search/repositories', {
        // To exclude the pull requests to your repositories
        // q: `type:pr+author:"${user.username}"+-user:"${user.username}"`,
        // To include the pull requests to your repositories
        q: `user:"${user}"`,
        sort: 'stars',
        order: 'desc',
        per_page: 5
    });
}

export async function getGithubUserData(user:string){
    const octokit = useOctokit();
   return octokit.request('GET /users/{username}', {
        username: user,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
}