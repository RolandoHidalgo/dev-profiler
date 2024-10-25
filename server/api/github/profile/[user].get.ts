import {getGithubUserData, getUserRepos} from "~/server/utils/github";
import {GithubProfileOverView} from "~/types/github";
import {z} from 'zod';
export default defineEventHandler(async (event):Promise<GithubProfileOverView> => {

    const {user} = await getValidatedRouterParams(event, z.object({user:z.string()}).parse)
    const [profile, repos] = await Promise.all([
        getGithubUserData(user),
        getUserRepos(user)
    ]);



    return {
        name:profile.data.name??'No name provided',
        followers:profile.data.followers,
        login:profile.data.login,
        id:profile.data.id,
        repos:repos.data.items.map(e => {

            return {
                name: e.name,
                description:e.description ?? 'No description provided for this repo.',
                stars:e.stargazers_count
            }
        })

    }


})