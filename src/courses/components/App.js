import React from 'react'
import AppCoursesList from "../containers/AppCoursesList";
import CoursesFilter from "./CoursesFilter";

const App = () => (
    <div>
        <CoursesFilter/>
        <AppCoursesList />
    </div>
)

export default App