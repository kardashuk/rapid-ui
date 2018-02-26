

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import withRoot from '../../withRoot';
import classNames from 'classnames';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Hidden from 'material-ui/Hidden';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';


import {mailFolderListItems, otherMailFolderListItems} from "./tileData";
import {toggleMainMenu} from "../actions";
const drawerWidth = 240;

const styles = theme => ({
    drawerHeader: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        marginRight:'-1px',
        minHeight: '64px',
        padding: '7px 6px',
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        borderRight:'none',
        boxShadow:'0 0 1px rgba(0,0,0,.12)',
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
    }


});
class AppMenu extends React.Component {

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
            <div>
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
                            paper: classNames(
                                classes.drawerPaper,
                                !state.ui.mainMenu && classes.drawerPaperClose
                            ),
                        }}
                        open={state.ui.mainMenu}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </div>
        );
    }
}

AppMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
function mapStateToProps (state) {
    return {
        state: state
    };
}
AppMenu = connect(mapStateToProps)(AppMenu);

export default withRoot(withStyles(styles, { withTheme: true })(AppMenu));

