let appDefaults = {
  user: null
};
const app = (state = appDefaults, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user:{
                    first_name: 'John',
                    last_name: 'Doe',
                    photo: 'http://www.esp8266.com/images/user4.png'
                }
            };
        case 'LOGOUT':
            state.user = null;
            return state;
        default:
            return state
    }
}

export default app