import React, {useCallback} from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import InputBase from "@material-ui/core/InputBase"
import Badge from "@material-ui/core/Badge"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import SearchIcon from "@material-ui/icons/Search"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MailIcon from "@material-ui/icons/Mail"
import MoreIcon from "@material-ui/icons/MoreVert"
import PeopleIcon from "@material-ui/icons/People"
import ContactsIcon from "@material-ui/icons/Contacts"
import SettingsIcon from "@material-ui/icons/Settings"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import {useHistory} from "react-router-dom"
import {useStyles} from "./HeaderCSS"


export const Header: React.FC = () => {

    const classes = useStyles()
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null)

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }



    const history = useHistory()

    //
    const HandleOnClick = (e: any) => useCallback(()=>{
        history.push(e.datatype)
        handleMobileMenuClose()
    },[history])


    const handleOnClickMessage = useCallback(() => {
        history.push("/messages")
        handleMobileMenuClose()
    }, [history])
    const handleOnClickProfile = useCallback(() => {
        history.push("/profile")
        handleMobileMenuClose()
    }, [history])
    const handleOnClickFriends = useCallback(() => {
        history.push("/friends")
        handleMobileMenuClose()
    }, [history])
    const handleOnClickUsers = useCallback(() => {
        history.push("/users")
        handleMobileMenuClose()
    }, [history])
    const handleOnClickMusic = useCallback(() => {
        history.push("/music")
        handleMobileMenuClose()
    }, [history])
    const handleOnClickSettings = useCallback(() => {
        history.push("/settings")
        handleMobileMenuClose()
    }, [history])


    const menuId = "primary-search-account-menu"
    const renderMenu = (
        <Menu
            anchorOrigin={{vertical: "top", horizontal: "right"}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: "top", horizontal: "right"}}
            open={false}
        >
        </Menu>
    )

    const mobileMenuId = "primary-search-account-menu-mobile"
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: "top", horizontal: "right"}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: "top", horizontal: "right"}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleOnClickProfile}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"

                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem onClick={HandleOnClick} datatype={"/message"}>
                <IconButton aria-label="show new mails" color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem onClick={handleOnClickFriends}>
                <IconButton aria-label="show new mails" color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <ContactsIcon/>
                    </Badge>
                </IconButton>
                <p>Friends</p>
            </MenuItem>
            <MenuItem onClick={handleOnClickUsers}>
                <IconButton aria-label="show new mails" color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <PeopleIcon/>
                    </Badge>
                </IconButton>
                <p>Users</p>
            </MenuItem>
            <MenuItem onClick={handleOnClickMusic}>
                <IconButton aria-label="show new mails" color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <LibraryMusicIcon/>
                    </Badge>
                </IconButton>
                <p>Music</p>
            </MenuItem>
            <MenuItem onClick={handleOnClickSettings}>
                <IconButton aria-label="show new mails" color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <SettingsIcon/>
                    </Badge>
                </IconButton>
                <p>Settings</p>
            </MenuItem>

        </Menu>
    )

    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{backgroundColor: "black"}}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        social-network
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{"aria-label": "search"}}
                        />
                    </div>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleOnClickProfile}
                        >
                            <AccountCircle/>
                        </IconButton>
                        <IconButton aria-label="show 4 new mails" color="inherit"
                                    onClick={handleOnClickMessage}>
                            <Badge badgeContent={0} color="secondary">
                                <MailIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 4 new mails" color="inherit"
                                    onClick={handleOnClickFriends}>
                            <Badge badgeContent={0} color="secondary">
                                <ContactsIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 4 new mails" color="inherit"
                                    onClick={handleOnClickUsers}>
                            <Badge badgeContent={0} color="secondary">
                                <PeopleIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 4 new mails" color="inherit"
                                    onClick={handleOnClickMusic}>
                            <Badge badgeContent={0} color="secondary">
                                <LibraryMusicIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 4 new mails" color="inherit" datatype={"settings"}
                                    onClick={handleOnClickSettings}>
                            <Badge badgeContent={0} color="secondary">
                                <SettingsIcon/>
                            </Badge>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    )
}
