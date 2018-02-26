
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
import Reboot from 'material-ui/Reboot'
import Hidden from 'material-ui/Hidden';


import {login, toggleMainMenu} from "../actions";

import AppMenu from './AppMenu';
import ProfileMenu from './ProfileMenu';

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
    appBarNoShift:{
        width:'100%',
        marginLeft:0
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
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        maxWidth:'100%',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },

});

class AppLayout extends React.Component {

    render() {
        const {  state,classes, dispatch } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.appRoot}>
                    <div className={classes.appFrame}>
                        <Reboot />
                        <AppBar position="static"
                                className={classNames(
                                    classes.appBar,
                                    state.ui.mainMenu  && classes.appBarShift,
                                    !state.app.user && classes.appBarNoShift
                                )}>
                            <Toolbar>
                                {state.app.user && (
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
                                )}
                                <Typography variant="title" color="inherit" className={classes.flex}>
                                    Investments
                                </Typography>
                                {state.app.user && (
                                    <ProfileMenu />
                                )}
                                {!state.app.user && (
                                    <Button variant="raised" color="default"
                                            onClick={()=>{dispatch(login())}}>Login</Button>
                                )}
                            </Toolbar>
                        </AppBar>
                        {state.app.user && ( <AppMenu /> )}

                        <main className={classes.content}>
                            <div className={classes.toolbar} />
                            <Typography >{'You think water moves fast? You should see ice.'}</Typography>
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

