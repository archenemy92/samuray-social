import React from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import {NavLink} from "react-router-dom"
import "./Navbar.css"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "center",

            "& > a": {
                margin: "5px 20px 5px 20px",
                fontWeight: "bolder",
                textDecoration: "none",
                listStyleType: "none"
            },
            "& > a.active": {
                color: "hsl(253, 40%, 72%)"
            },
            "& > a:not(.active)": {
                color: "hsl(202, 64%, 65%)"
            },
            "& > a:hover": {
                color: "hsl(253, 40%, 59%)"
            },

        }
    })
)


export const Navbar: React.FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <NavLink to={"/profile"}>
                PROFILE
            </NavLink>
            <NavLink to={"/messages"}>
                MESSAGES
            </NavLink>
            <NavLink to={"/friends"}>
                FRIENDS
            </NavLink>
            <NavLink to={"/users"}>
                USERS
            </NavLink>
            <NavLink to={"/music"}>
                MUSIC
            </NavLink>
            <NavLink to={"/settings"}>
                SETTINGS
            </NavLink>
        </div>
    )
}

