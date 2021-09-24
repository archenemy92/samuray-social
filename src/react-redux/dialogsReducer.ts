import { v1 } from "uuid"

type AddMessageType = ReturnType<typeof addMessage>
type DeleteMessageType = ReturnType<typeof deleteMessage>

export type ActionsMessageType = AddMessageType | DeleteMessageType

export type UserType = {
    id: string
    avatar: string | null
    nikName: string

}

export type MessageType = {
    id: string
    message: string
    date: string | null
}

type DialogPageType = {
    usersNames: UserType[]
    myMessage: MessageType[]
    friendMessage: MessageType[]

}

export const addMessage = (message: string) => {
    return {
        type: "dialog_ADD_MESSAGE",
        message: message
    } as const
}

export const deleteMessage = (messageId: string) => {
    return {
        type: "dialog_DELETE_MESSAGE",
        id: messageId
    } as const
}

const initialState: DialogPageType = {
    usersNames: [
        {id: v1(), nikName: "Lenka", avatar: null},
    ],
    myMessage: [

    ],
    friendMessage: [
        {
            id: v1(),
            date: new Date().toLocaleString(),
            message: "sadfasdfsadfasdf"
        }
    ]

}

export const dialogsReducer = (state = initialState, action: ActionsMessageType) => {

    switch (action.type) {
        case "dialog_ADD_MESSAGE": {
            const newMessage: MessageType = {
                id: v1(),
                date: new Date().toLocaleString(),
                message: action.message
            }
            return {
                ...state,
                myMessage: [...state.myMessage, newMessage]
            }
        }
        case "dialog_DELETE_MESSAGE": {
            return {
                ...state,
                myMessage: state.myMessage.filter(m => m.id !== action.id),
                friendMessage: state.friendMessage.filter(m=>m.id !== action.id)
            }
        }
        default: {
            return state
        }
    }
}
