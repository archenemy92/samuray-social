import React from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import {NavLink} from "react-router-dom"
import "./Navbar.css"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > li > a": {
                padding: "5px",
                fontWeight: "bold",
                textDecoration: "none"
            },
            "& > li > a.active": {
                color: 'yellow'
            },
            "& > li > a:not(.active)": {
                color: "green"
            },
            "& > li": {
                listStyleType: "none"
            }
        }
    })
)


export const Navbar: React.FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <li>
                <NavLink to={"/profile"}>
                    PROFILE
                </NavLink>
            </li>
            <li>
                <NavLink to={"/messages"}>
                    MESSAGES
                </NavLink>
            </li>
            <li>
                <NavLink to={"/friends"}>
                    FRIENDS
                </NavLink>
            </li>
            <li>
                <NavLink to={"/users"}>
                    USERS
                </NavLink>
            </li>
            <li>
                <NavLink to={"/music"}>
                    MUSIC
                </NavLink>
            </li>
            <li>
                <NavLink to={"/settings"}>
                    SETTINGS
                </NavLink>
            </li>

        </div>
    )
}

