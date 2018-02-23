export const initCourses = data => {
    return {
        type: 'COURSES_INIT',
        data
    }
}

export const filterCourses = filter => {
    console.log('filter', filter);
    if (!filter){
        return {
            type:'COURSES_ALL'
        }
    }
    return {
        type: 'COURSES_FILTER',
        filter
    }
}