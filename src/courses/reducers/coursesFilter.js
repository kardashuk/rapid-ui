const visibilityFilter = (state = 'SHOW_ALL', action) => {
    console.log('reduceFilter', action, state);
    switch (action.type) {
        case 'COURSES_FILTER':
            return {
                type:'SHOW_BY_DATE',
                date:action.filter
            }
        case 'COURSES_ALL':
            return {
                type:'SHOW_ALL'
            }
        default:
            return state
    }
}

export default visibilityFilter