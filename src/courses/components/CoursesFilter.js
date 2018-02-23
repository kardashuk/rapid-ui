import React from 'react'
import { connect } from 'react-redux'
import { filterCourses } from '../actions'

let CoursesFilter = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    dispatch(filterCourses(input.value))
                    input.value = ''
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">
                    Filter
                </button>
            </form>
        </div>
    )
}
CoursesFilter = connect()(CoursesFilter)

export default CoursesFilter