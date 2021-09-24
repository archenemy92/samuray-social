import React from "react"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {Dialogs} from "./Dialogs"
import {AppStateType} from "../../react-redux/Store"
import {addMessage} from "../../react-redux/dialogsReducer"
import {deleteMessage} from "../../react-redux/dialogsReducer"
import {MessageType} from "../../react-redux/dialogsReducer"
import {UserType} from "../../react-redux/dialogsReducer"

export const DialogsC: React.FC = () => {

    const userNames = useSelector<AppStateType, UserType[]>(state => state.dialogsPage.usersNames)
    const friendMessages = useSelector<AppStateType, MessageType[]>(state => state.dialogsPage.friendMessage)
    const myMessages = useSelector<AppStateType, MessageType[]>(state => state.dialogsPage.myMessage)

    const dispatch = useDispatch()

    return (
        <Dialogs
            usersNames={userNames}
            myMessage={myMessages}
            friendMessage={friendMessages}
            addMessage={(message) => dispatch(addMessage(message))}
            deleteMessage={(messageId) => dispatch(deleteMessage(messageId))}/>
    )
}