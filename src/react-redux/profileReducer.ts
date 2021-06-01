const profile_ADD_POST = "profile_ADD_POST"
const profile_DELETE_POST = "profile_DELETE_POST"

export type PostType = {
    id: number
    postBody: string
    date: string
    avatar: string | null


}
export type DescriptionType = {
    aboutMe: string | null
    country: string | null
    city: string | null
    age: number | null

}

type ProfilePageType = {
    posts: PostType[]
    ava: string | null
    status: string | null
    desc: DescriptionType
}

const initialState: ProfilePageType = {
    posts: [
        {
            id: Math.random(),
            date: new Date().toLocaleString(),
            postBody: "newtext",
            avatar: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
        }
    ],
    ava: null,
    status: null,
    desc: {
        aboutMe: null,
        age: null,
        city: null,
        country: null
    }

}

export const profileReducer = (state = initialState, action: ActionsProfileTypes): ProfilePageType => {
    switch (action.type) {
        case profile_ADD_POST: {
            let newPost: PostType = {
                avatar: null,
                id: Math.random(),
                date: new Date().toLocaleString(),
                postBody: action.text
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case profile_DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        }
        default: {
            return state
        }
    }
}

type AddPostType = {
    type: typeof profile_ADD_POST
    text: string
}
export const addPost = (text: string): AddPostType => {
    return {
        type: profile_ADD_POST,
        text: text
    }
}

type DeletePostType = {
    type: typeof profile_DELETE_POST
    id: number
}
export const deletePost = (id: number): DeletePostType=> {
    return {
        type: profile_DELETE_POST,
        id: id
    }

}


export type ActionsProfileTypes = AddPostType | DeletePostType