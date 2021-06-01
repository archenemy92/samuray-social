import React, {useState} from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import {IconButton} from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import DeleteIcon from "@material-ui/icons/Delete"
import {PostType} from "../../../../react-redux/profileReducer"
import AVATAR from "../../../../assets/AVATAR.png"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        img: {
            width: "50px",
            borderRadius: "50%"
        },
        root: {
            margin: "10px",
            borderRadius: "5px",
            backgroundColor: "beige"
        },
        del: {
            color: "red",
            float: "right",
            borderRadius: "50%"
        },
        like: {
            color: "blue",
            borderRadius: "50%"
        }

    }),
)

type PostPropsType = {
    post: PostType
    deletePost: (id: number) => void

}

export const Post: React.FC<PostPropsType> = (props) => {
    const classes = useStyles()
    const [incLike, setIncLike] = useState(0)
    const [decLike, setDecLike] = useState(0)


    return (
        <div className={classes.root}>
            <div>
                <img className={classes.img}
                     src={props.post.avatar ? props.post.avatar : AVATAR}
                     alt={"avatar"}/>
            </div>
            <div>
                {props.post.postBody}
            </div>
            <div>
                <span>
                     <IconButton aria-label="favorite" className={classes.like}
                                 onClick={() => {
                                     setIncLike(+1)
                                     setDecLike(0)
                                 }}>
                        <FavoriteIcon/> : {incLike}
                     </IconButton>
                </span>
                <span>
                     <IconButton aria-label="unFavorite"
                                 onClick={() => {
                                     setDecLike(+1)
                                     setIncLike(0)
                                 }}>
                        <FavoriteBorderIcon/> : {decLike}
                   </IconButton>
                </span>
                <span>
                   <IconButton aria-label="delete" className={classes.del}
                               onClick={() => {
                                   props.deletePost(props.post.id)
                               }}>
                        <DeleteIcon/>
                   </IconButton>
                </span>
            </div>
            <span>{props.post.date}</span>
        </div>
    )
}