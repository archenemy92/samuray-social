import {Dispatch} from "react"
import {connect} from "react-redux"
import {Profile} from "./Profile"
import {StoreType} from "../../react-redux/Store"
import {
    ActionsProfileTypes,
    addPost,
    deletePost,
    DescriptionType,
    PostType
} from "../../react-redux/profileReducer"

type MSTPType = {
    avatar: string | null
    description: DescriptionType
    status: string | null
    posts: PostType[]
}
const mapStateToProps = (state: StoreType): MSTPType => {
    return {
        avatar: state.profilePage.ava,
        description: state.profilePage.desc,
        status: state.profilePage.status,
        posts: state.profilePage.posts
    }
}

type MDTPType = {
    addPost: (text: string)=>void
    deletePost: (id: number)=>void
}
const mapDispatchToProps = (dispatch: Dispatch<ActionsProfileTypes>): MDTPType => {
    return {
        addPost: (text)=> {
            dispatch(addPost(text))
        },
        deletePost: (id)=> {
            dispatch(deletePost(id))
        }
    }
}

export const ProfileC = connect<MSTPType, MDTPType, {}, StoreType>(mapStateToProps, mapDispatchToProps)(Profile)