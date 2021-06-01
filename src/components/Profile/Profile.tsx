import React from "react"
import {Posts} from "./Posts/Posts"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import {DescriptionType, PostType} from "../../react-redux/profileReducer"
import AVATAR from "../../assets/AVATAR.png"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        img: {
            width: "120px",
            borderRadius: "50%",
            margin: "10px"
        },
        desc: {
            float: "right",
            paddingRight: "10px",
            position: "relative",
            bottom: "150px",
            right: "10px",
            borderBottom: "2px solid"
        },
        status: {
            marginLeft: "20px"
        }

    }),
)

type ProfilePropsType = {
    avatar: string | null
    description: DescriptionType
    addPost: (text: string) => void
    deletePost:(id:number)=>void
    status: string | null
    posts: PostType[]
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    const classes = useStyles()
    return (
        <div>
            <div>
                <div>
                    <img src={props.avatar ? props.avatar : AVATAR}
                         className={classes.img}
                         alt={"avatarka"}/>
                    <div className={classes.status}>{props.status || "status will be here"}</div>
                </div>
                <div className={classes.desc}>
                    Desc
                    <p>{props.description.aboutMe || "about me?"}</p>
                    <p>{props.description.country || "country?"}</p>
                    <p>{props.description.city || "city?"}</p>
                    <p>{props.description.age || "age?"}</p>
                </div>
            </div>
            <div>
                <Posts addPost={props.addPost}
                       deletePost={props.deletePost}
                       posts={props.posts}/>
            </div>
        </div>
    )
}