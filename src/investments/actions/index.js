export const login = data => {
    return {
        type: 'LOGIN',
        data
    }
}

export const logout = data => {
    return {
        type: 'LOGOUT',
        data
    }
}

export const toggleProfileMenu = data => {
    return {
        type: 'TOGGLE_PROFILE_MENU',
        data
    }
}

export const toggleMainMenu = data => {
    return {
        type: 'TOGGLE_MAIN_MENU',
        data
    };
}