import React, {useState} from "react"
import {Post} from "./Post/Post"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import {PostType} from "../../../react-redux/profileReducer"


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > *": {
                margin: theme.spacing(1),
                width: "99%",
            },
        },

    }),
)
type PostsPropsType = {
    addPost: (text: string) => void
    deletePost: (id: number) => void
    posts: PostType[]
}

export const Posts: React.FC<PostsPropsType> = (props) => {
    const classes = useStyles()
    const [newPostText, setNewPostText] = useState("")

    const addPost = (e: React.KeyboardEvent) => {
        if (e.shiftKey && e.key === "Enter") {
            e.preventDefault()
            props.addPost(newPostText)
            setNewPostText("")
        }
    }

    const postsItems = props.posts.map(p => <Post key={p.id} post={p} deletePost={props.deletePost}/>)

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="standard-textarea"
                    multiline
                    autoFocus
                    value={newPostText}
                    onChange={(e) =>
                        setNewPostText(e.target.value)}
                    onKeyPress={addPost}/>

            </form>
            {postsItems}
        </div>
    )
}