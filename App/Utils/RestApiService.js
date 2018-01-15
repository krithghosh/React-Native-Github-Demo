import {BASE_URL} from './Constant'

export const getBiodata = (username) => {
    username = username.toLowerCase().trim()
    var url = `${BASE_URL}/users/${username}`
    return fetch(url).then((res) => res.json())
}

export const getRepository = (username) => {
    username = username.toLowerCase().trim()
    var url = `${BASE_URL}/users/${username}/repos`
    return fetch(url).then((res) => res.json())
}