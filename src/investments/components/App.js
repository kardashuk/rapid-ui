

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import withRoot from '../../withRoot';
import classNames from 'classnames';

import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button'
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle'
import Reboot from 'material-ui/Reboot'
import Menu, { MenuItem } from 'material-ui/Menu';
import Hidden from 'material-ui/Hidden';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';


import {login, logout, toggleProfileMenu, toggleMainMenu} from "../actions";
import {mailFolderListItems, otherMailFolderListItems} from "./tileData";

const drawerWidth = 240;

const styles = theme => ({
    root:{
        flex:1
    },
    appRoot: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'absolute',

        [theme.breakpoints.up('md')]: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        width: 60,
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },

});
class AppLayout extends React.Component {

    render() {
        const {  state,classes, dispatch, theme } = this.props;
        const drawer = (
            <div>
                <div className={classes.drawerHeader} >
                    <Hidden mdUp>
                        <IconButton onClick={()=>{dispatch(toggleMainMenu())}}>
                            { state.ui.profileMenu
                                ? <MenuIcon />
                                : (theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />)
                            }
                        </IconButton>
                    </Hidden>
                </div>
                <Divider />
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </div>
        );
        return (
            <div className={classes.root}>
                <div className={classes.appRoot}>
                    <div className={classes.appFrame}>
                        <Reboot />
                        <AppBar position="static"
                                className={classNames(classes.appBar, state.ui.mainMenu && classes.appBarShift)}>
                            <Toolbar>
                                <Hidden mdUp smUp={state.ui.mainMenu}>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={()=>{dispatch(toggleMainMenu())}}
                                        className={classes.navIconHide}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Hidden>
                                <Typography variant="title" color="inherit" className={classes.flex}>
                                    Investments
                                </Typography>
                                {state.app.user && (
                                    <div>
                                        <IconButton
                                            aria-owns={state.ui.profileMenu.open ? 'menu-appbar' : null}
                                            aria-haspopup="true"
                                            onClick={(event)=>{dispatch(toggleProfileMenu(event.currentTarget))}}
                                            color="inherit"
                                        >
                                            <AccountCircle />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={state.ui.profileMenu.element}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={state.ui.profileMenu.open}
                                            onClick={()=>{dispatch(toggleProfileMenu())}}
                                        >
                                            <MenuItem onClick={()=>{dispatch(toggleProfileMenu())}}>Profile</MenuItem>
                                            <MenuItem onClick={()=>{dispatch(logout())}}>Logout</MenuItem>
                                        </Menu>
                                    </div>
                                )}
                                {!state.app.user && (
                                    <Button variant="raised" color="default" onClick={()=>{dispatch(login())}}>Login</Button>
                                )}
                            </Toolbar>
                        </AppBar>

                        <Hidden smDown implementation="css">
                            <Drawer
                                variant="permanent"
                                classes={{
                                    paper: classNames(classes.drawerPaper),
                                }}
                                open
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden smUp>
                            <Drawer
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={state.ui.mainMenu}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                onClose={()=>{dispatch(toggleMainMenu())}}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden xsDown mdUp implementation="css">
                            <Drawer
                                variant="permanent"
                                classes={{
                                    paper: classNames(classes.drawerPaper, !state.ui.mainMenu && classes.drawerPaperClose),
                                }}
                                open={state.ui.mainMenu}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <main className={classes.content}>
                            <div className={classes.toolbar} />
                            <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

AppLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
function mapStateToProps (state) {
    return {
        state: state
    };
}
AppLayout = connect(mapStateToProps)(AppLayout);

export default withRoot(withStyles(styles, { withTheme: true })(AppLayout));

