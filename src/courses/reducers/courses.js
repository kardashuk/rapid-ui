const courses = (state = [], action) => {
    switch (action.type) {
        case 'COURSES_INIT':
            let response = action.data;
            return response.status === 200 ? response.data : state;
        default:
            return state
    }
}

export default courses