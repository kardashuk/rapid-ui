import { connect } from 'react-redux'
import CoursesList from '../components/CoursesList'

const getVisibleCourses = (courses, filter) => {

    let type = filter.type || filter;
    var yymmdd = function(time) {
        var date = new Date(time-0);
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();

        return [date.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
        ].join('-');
    };
    console.log('map', filter, yymmdd(filter.date));
    switch (type) {
        case 'SHOW_BY_DATE':
            return courses.filter(c => c.date===yymmdd(filter.date))
        case 'SHOW_ALL':
        default:
            return courses
    }
}

const mapStateToProps = state => {
    console.log('container',state);
    return {
        courses: getVisibleCourses(state.courses,state.coursesVisibilityFilter)
    }
}

const AppCoursesList = connect(
    mapStateToProps
)(CoursesList)

export default AppCoursesList