import { combineReducers } from 'redux'
import courses from './courses'
import coursesVisibilityFilter from './coursesFilter';

const coursesApp = combineReducers({
    courses,
    coursesVisibilityFilter
})

export default coursesApp