import {Octokit} from 'octokit'

let _octokit: Octokit

export function useOctokit(token?: string) {
    if (!_octokit || token) {
        _octokit = new Octokit({
            auth: token,
        })

    }
    return _octokit
}