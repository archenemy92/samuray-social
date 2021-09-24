import {ThunkType} from "./Store"
import {userApi} from "../API/api"

export type UsersType = {
    name: string
    id: number
    photos: {
        small: string | null
        large: string | null
    },
    status: string | null
    followed: boolean
    uniqueUrlName: null |string
}

export type StateType = {
    users: UsersType[]
    totalCount: number | null
    error: string | null
}

const initialState: StateType = {
    users: [] as UsersType[],
    totalCount: null,
    error: null

}

export const usersReducer = (state = initialState, action: ActionsUsersPageType): StateType => {

    switch (action.type) {
        case "userPage_SET_USERS": {
            return {
                ...state,
                users: [...action.users]
            }
        }
        default: {
            return state
        }
    }
}

export const follow = (userId: number) => {
    return {
        type: "userPage_FOLLOW",
        id: userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: "userPage_UNFOLLOW",
        id: userId
    } as const
}
export const setUsers = (users: UsersType[]) => {
    return {
        type: "userPage_SET_USERS",
        users
    } as const
}

export const getUsers = ():ThunkType =>
    async (dispatch) => {
    const res = await userApi.getUsers()
        dispatch(setUsers(res.data.items))
    }

type SetUsersType = ReturnType<typeof setUsers>
type FollowType = ReturnType<typeof follow>
type UnfollowType = ReturnType<typeof unfollow>

export type ActionsUsersPageType = FollowType | UnfollowType| SetUsersType