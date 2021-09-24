import React from "react"
import {UsersType} from "../../react-redux/usersReducer"
import AVATAR from "../../assets/AVATAR.png"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        img: {
            width: "50px",
            borderRadius: "50%"
        }
    }),
)

type UsersPropsType = {
    users: UsersType[]
}

export const Users: React.FC<UsersPropsType> = (props) => {
    const classes = useStyles()

    const users = props.users.map(u => {
        return (
            <div key={u.id} style={{margin: "0 0 10px 0"}}>
                <div>
                    <img src={u.photos?.small || AVATAR} className={classes.img}/>
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>
                    <span>
                        <button>follow</button>
                    </span>
                    <span>
                        <button>unfollow</button>
                    </span>
                </div>
            </div>
        )
    })
    return (
        <div style={{margin: "10px 0 0 10px"}}>
            {users}
        </div>
    )
}