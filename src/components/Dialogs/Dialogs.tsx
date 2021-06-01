import {Grid, IconButton, makeStyles, Paper, TextField, useMediaQuery} from "@material-ui/core"
import React, {useState} from "react"
import {createStyles, Theme} from "@material-ui/core/styles"
import SendIcon from "@material-ui/icons/Send"
import {MessageType, UserType} from "../../react-redux/dialogsReducer"
import DeleteIcon from "@material-ui/icons/Delete"

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
            width: "70%",
            margin: "5px",
            border: "solid 2px grey",
            borderRadius: "5px"
        },
        my: {
            textAlign: "right",
            width: "70%",
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
            color: theme.palette.text.secondary,
            position: "relative",
            display: "inline-flex",
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
    deleteMessage: (messageId: number) => void
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

    const dialogNames = props.usersNames.map(u => <div key={u.id}>
        <div>{u.avatar}</div>
        <div>{u.nikName}</div>
    </div>)

    const fMessages = props.friendMessage.map(m => <div key={m.id}
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

    </div>)

    const mMessages = props.myMessage.map(m => <div key={m.id}
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
        <span>

    </span>
    </div>)


    return (
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <Paper className={classes.names}>
                    {dialogNames}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={10}>
                <Paper className={classes.paper}>
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
                                <button className={classes.sendButton}>
                                    <SendIcon className={classes.sendIcon}/>
                                </button>
                            </span>
                        </form>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}