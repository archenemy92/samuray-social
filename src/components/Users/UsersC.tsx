import React, { useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {AppStateType} from "../../react-redux/Store"
import { getUsers, UsersType} from "../../react-redux/usersReducer"
import {Users} from "./Users"

export const UsersC: React.FC = () => {

    const users = useSelector<AppStateType, UsersType[]>(state => state.usersPage.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <Users users={users}/>
    )
}