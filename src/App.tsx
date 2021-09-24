import {Grid} from "@material-ui/core"
import React from "react"
import "./App.css"
import {Header} from "./components/Header/Header"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import {Route} from "react-router-dom"
import {Friends} from "./components/Friends/Friends"
import {Music} from "./components/Music/Music"
import { Settings } from "./components/Settings/Settings"
import {ProfileC} from "./components/Profile/ProfileC"
import {DialogsC} from "./components/Dialogs/DialogsC"
import {UsersC} from "./components/Users/UsersC"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: "#F0F8FF",
            display: "grid",
            width: "100%"
        },
        main: {
            marginBottom: "8px"
        },
        footer: {
            backgroundColor: "gold"
        }
    }),
)

const App: React.FC = () => {

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12} className={classes.main}>
                    <Route path={"/profile"} render={()=><ProfileC/>}/>
                    <Route path={"/messages"} render={()=><DialogsC/>}/>
                    <Route path={"/friends"} render={()=><Friends/>}/>
                    <Route path={"/users"} render={()=><UsersC/>}/>
                    <Route path={"/music"} render={()=><Music/>}/>
                    <Route path={"/settings"} render={()=><Settings/>}/>
                </Grid>
                <Grid item xs={12} className={classes.footer}>
                    footer
                </Grid>
            </Grid>
        </div>

    )
}

export default App
