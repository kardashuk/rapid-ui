

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import withRoot from '../../withRoot';

import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui-icons/AccountCircle'
import Menu, { MenuItem } from 'material-ui/Menu';


import { logout, toggleProfileMenu} from "../actions";

const styles = theme => ({

});
class ProfileMenu extends React.Component {

    render() {
        const {  state, dispatch } = this.props;

        return (
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
        );
    }
}

ProfileMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
function mapStateToProps (state) {
    return {
        state: state
    };
}
ProfileMenu = connect(mapStateToProps)(ProfileMenu);

export default withRoot(withStyles(styles, { withTheme: true })(ProfileMenu));

