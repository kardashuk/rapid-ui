import React from 'react'
import PropTypes from 'prop-types'

const Course = ({ date, ask, bid }) => (
    <li>
        {date} {ask} {bid}
    </li>
)

Course.propTypes = {
    date: PropTypes.string.isRequired,
    ask: PropTypes.string.isRequired,
    bid: PropTypes.string.isRequired
}

export default Course