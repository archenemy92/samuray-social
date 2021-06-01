import React, {Dispatch} from "react"
import {connect} from "react-redux"
import {Dialogs} from "./Dialogs"
import {StoreType} from "../../react-redux/Store"
import {ActionsMessageType, addMessage, deleteMessage, MessageType, UserType} from "../../react-redux/dialogsReducer"

type MSTPType = {
    usersNames: UserType[]
    myMessage: MessageType[]
    friendMessage: MessageType[]
}
type MDTPType = {
    addMessage: (message: string) => void
    deleteMessage: (messageId: number) => void
}

const mapStateToProps = (state: StoreType): MSTPType => {
    return {
        usersNames: state.dialogsPage.usersNames,
        myMessage: state.dialogsPage.myMessage,
        friendMessage: state.dialogsPage.friendMessage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionsMessageType>): MDTPType => {
    return {
        addMessage: (message) => {
            dispatch(addMessage(message))
        },
        deleteMessage: (messageId) => {
            dispatch(deleteMessage(messageId))
        }

    }
}

export const DialogsC = connect<MSTPType, MDTPType, {}, StoreType>(mapStateToProps, mapDispatchToProps)(Dialogs)