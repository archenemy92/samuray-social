import React, {Dispatch} from "react"
import {connect} from "react-redux"
import {StoreType} from "../../react-redux/Store"
import {ActionsUsersPageType, setUsers, UsersType} from "../../react-redux/usersReducer"
import {Users} from "./Users"
import axios from "axios"

type UsersClassPropsType = {
    users: UsersType[]
    setUsers: (users: UsersType[]) => void
}

export class UsersClass extends React.Component<UsersClassPropsType, any> {
    componentDidMount() {
        axios.get<{ items: UsersType[] }>("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <Users users={this.props.users}/>
        )
    }
}


type MSTPType = {
    users: UsersType[]
}
type MDTPType = {
    setUsers: (users: UsersType[]) => void
}

const mapStateToProps = (state: StoreType): MSTPType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsUsersPageType>): MDTPType => {
    return {
        setUsers: (users: UsersType[]) => {
            dispatch(setUsers(users))
        }
    }
}


export const UsersC = connect<MSTPType, MDTPType, {}, StoreType>(mapStateToProps, mapDispatchToProps)(UsersClass)