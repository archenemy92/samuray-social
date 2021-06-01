import {createStore, combineReducers} from "redux"
import {profileReducer} from "./profileReducer"
import {dialogsReducer} from "./dialogsReducer"
import {usersReducer} from "./usersReducer"

type RootReducerType = typeof rootReducer
export type StoreType = ReturnType<RootReducerType>


export const rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer
    }
)

export const store = createStore(rootReducer)
//@ts-ignore
window.store = store