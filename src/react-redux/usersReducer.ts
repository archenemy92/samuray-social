const userPage_SET_USERS = "userPage_SET_USERS"
const userPage_FOLLOW = "userPage_FOLLOW"
const userPage_UNFOLLOW = "userPage_UNFOLLOW"
//const userPage_SET_USERS = "userPage_SET_USERS"

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

type SetUsersType = {
    type: typeof userPage_SET_USERS
    users: UsersType[]
}

type FollowType = {
    type: typeof userPage_FOLLOW
    id: number
}
type UnfollowType = {
    type: typeof userPage_UNFOLLOW
    id: number
}

export type ActionsUsersPageType = FollowType | UnfollowType| SetUsersType

const initialState: StateType = {
    users: [] as UsersType[],
    totalCount: null,
    error: null

}

export const usersReducer = (state = initialState, action: ActionsUsersPageType): StateType => {

    switch (action.type) {
        case userPage_SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default: {
            return state
        }
    }
}

export const follow = (userId: number): FollowType => {
    return {
        type: userPage_FOLLOW,
        id: userId
    }
}
export const unfollow = (userId: number): UnfollowType => {
    return {
        type: userPage_UNFOLLOW,
        id: userId
    }
}
export const setUsers = (users: UsersType[]): SetUsersType => {
    return {
        type: userPage_SET_USERS,
        users
    }
}