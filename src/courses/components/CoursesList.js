import React from 'react'
import PropTypes from 'prop-types'
import Course from './Course'

const CoursesList = ({ courses }) => (
    <ul>
        {courses.map(course => (
            <Course key={course.date} {...course} />
        ))}
    </ul>
)

CoursesList.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            ask: PropTypes.string.isRequired,
            bid: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
}

export default CoursesList