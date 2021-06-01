const dialog_ADD_MESSAGE = "dialog_ADD_MESSAGE"
const dialog_DELETE_MESSAGE = "dialog_DELETE_MESSAGE"

export type UserType = {
    id: number
    avatar: string | null
    nikName: string

}
export type MessageType = {
    id: number
    message: string
    date: string | null
}
type DialogPageType = {
    usersNames: UserType[]
    myMessage: MessageType[]
    friendMessage: MessageType[]

}
const initialState: DialogPageType = {
    usersNames: [
        {id: Math.random(), nikName: "Kotan", avatar: null}
    ],
    myMessage: [

    ],
    friendMessage: [
        {
            id: Math.random(),
            date: new Date().toLocaleString(),
            message: "sadfasdfsadfasdf"
        }
    ]

}

export const dialogsReducer = (state = initialState, action: ActionsMessageType) => {

    switch (action.type) {
        case dialog_ADD_MESSAGE: {
            const newMessage: MessageType = {
                id: Math.random(),
                date: new Date().toLocaleString(),
                message: action.message
            }
            return {
                ...state,
                myMessage: [...state.myMessage, newMessage]
            }
        }
        case dialog_DELETE_MESSAGE: {
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
type AddMessageType = {
    type: typeof dialog_ADD_MESSAGE
    message: string
}
export const addMessage = (message: string): AddMessageType => {
    return {
        type: dialog_ADD_MESSAGE,
        message: message
    }
}

type DeleteMessageType = {
    type: typeof dialog_DELETE_MESSAGE
    id: number
}
export const deleteMessage = (messageId: number): DeleteMessageType => {
    return {
        type: dialog_DELETE_MESSAGE,
        id: messageId
    }
}

export type ActionsMessageType = AddMessageType | DeleteMessageType