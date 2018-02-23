let stateDefault = {
    element: null,
    open: false
};

const profileMenu = (state = stateDefault, action) => {
    switch (action.type) {
        case 'TOGGLE_PROFILE_MENU':
            return {
                element: action.data ? action.data: null,
                open: !!action.data
            };
        default:
            return state
    }
}

export default profileMenu
