export type GithubProfileData = {
    login: string,
    name: string,
    id: number,
    followers: number
}

export type GituhubReposData = {
    name: string,
    description: string,
    stars: number
}

export type GithubProfileOverView = {
    appId?: number,
    repos: GituhubReposData[]
} & GithubProfileData