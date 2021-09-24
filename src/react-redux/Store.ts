import {createStore, combineReducers, applyMiddleware} from "redux"
import {profileReducer} from "./profileReducer"
import {dialogsReducer} from "./dialogsReducer"
import {ActionsUsersPageType, usersReducer} from "./usersReducer"
import thunkMiddleware, { ThunkAction } from "redux-thunk"

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type ActionsType = ActionsUsersPageType
export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer
    }
)

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
//@ts-ignore
window.store = store