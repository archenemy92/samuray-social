import {Grid, IconButton, makeStyles, Paper, TextField, useMediaQuery} from "@material-ui/core"
import React, {FormEvent, useState} from "react"
import {createStyles, Theme} from "@material-ui/core/styles"
import SendIcon from "@material-ui/icons/Send"
import {MessageType, UserType} from "../../react-redux/dialogsReducer"
import DeleteIcon from "@material-ui/icons/Delete"
import {NavLink} from "react-router-dom"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: "center",
            color: theme.palette.text.secondary,

        },
        del: {
            color: "red",
            float: "right",
        },
        delR: {
            color: "red",
            float: "left",
        },
        opponent: {
            textAlign: "left",
            maxWidth: "300px",
            margin: "5px",
            border: "solid 2px grey",
            borderRadius: "5px"
        },
        my: {
            textAlign: "right",
            maxWidth: "300px",
            margin: "5px",
            position: "relative",
            left: "29%",
            border: "solid 2px grey",
            borderRadius: "5px"

        },

        myMob: {
            textAlign: "right",
            width: "70%",
            margin: "5px",
            position: "relative",
            left: "27%",
            border: "solid 2px grey",
            borderRadius: "5px"
        },
        textarea: {
            overflow: "auto",
            outline: "none",
            width: "85%"

        },
        names: {
            padding: theme.spacing(2),
            textAlign: "center",
            position: "relative",
        },
        navLink: {
            color: "gray",
            fontWeight: "bold",
            textDecoration: "none",
        },
        active: {
            color: "red"
        },
        sendButtonSpan: {
            paddingLeft: "5px",
            position: "relative"
        },
        sendIcon: {
            position: "relative",
            color: "blue"

        },
        sendButton: {
            border: "none",
            backgroundColor: "inherit"
        }
    }),
)

type DialogsType = {
    usersNames: UserType[]
    myMessage: MessageType[]
    friendMessage: MessageType[]
    addMessage: (message: string) => void
    deleteMessage: (messageId: string) => void
}


export const Dialogs: React.FC<DialogsType> = (props) => {
    const isDesktop = useMediaQuery("(min-width:600px)")
    const classes = useStyles({isDesktop})

    const [newMessage, setNewMessage] = useState("")

    const addMessage = (e: React.KeyboardEvent) => {
        if (e.shiftKey && e.key === "Enter") {
            e.preventDefault()
            props.addMessage(newMessage)
            setNewMessage("")
        }
    }

    const dialogNames = props.usersNames
        .map(u =>
            <NavLink to={`/messages/${u.id}`} key={u.id} activeClassName={classes.active} className={classes.navLink}>
                <div>{u.avatar}</div>
                <div>{u.nikName}</div>
            </NavLink>
        )

    const fMessages = props.friendMessage.map(m => <Paper key={m.id}
                                                          className={classes.opponent}>
        <div>{m.message}
            <span>
                <IconButton aria-label="delete" className={classes.delR}
                            onClick={() => {
                                props.deleteMessage(m.id)
                            }}>
                    <DeleteIcon/>
                </IconButton>
            </span>
        </div>
        <div>{m.date}</div>

    </Paper>)

    const mMessages = props.myMessage.map(m => <Paper key={m.id}
                                                      className={isDesktop ? classes.my : classes.myMob}>
        <div>{m.message}
            <IconButton aria-label="delete" className={classes.del}
                        onClick={() => {
                            props.deleteMessage(m.id)
                        }}>
                <DeleteIcon/>
            </IconButton>
        </div>
        <div>{m.date}</div>
    </Paper>)


    return (
        <Grid container spacing={3} >
            <Grid item xs={2}>
                <div className={classes.names}>
                    {dialogNames}
                </div>
            </Grid>
            <Grid item xs={12} sm={10}>
                <div className={classes.paper}>
                    {fMessages}
                    {mMessages}
                    <div>
                        <form>
                            <span>
                                 <TextField
                                     className={classes.textarea}
                                     id="standard-textarea"
                                     multiline
                                     autoFocus
                                     value={newMessage}
                                     onChange={(e) =>
                                         setNewMessage(e.target.value)}
                                     onKeyPress={addMessage}
                                 />
                            </span>
                            <span className={classes.sendButtonSpan}>
                                <IconButton className={classes.sendButton}
                                            onClick={(e: FormEvent<HTMLButtonElement>) => {
                                                e.preventDefault()
                                                props.addMessage(newMessage)
                                                setNewMessage("")
                                            }}>
                                    <SendIcon className={classes.sendIcon}/>
                                </IconButton>
                            </span>
                        </form>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}