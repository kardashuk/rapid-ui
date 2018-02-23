import { combineReducers } from 'redux';
import mainMenu from './mainMenu';
import profileMenu from './profileMenu';

const ui = combineReducers({
    mainMenu,
    profileMenu
});

export default ui