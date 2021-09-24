import axios from "axios"
import {UsersType} from "../react-redux/usersReducer"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "ef2db174-b518-48a0-8476-91d72e746177"
    }
})

export const userApi = {
    getUsers() {
        return instance.get<{items: UsersType[]}>(`users`)
    }
}