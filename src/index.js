import React from 'react'
import { render } from 'react-dom'
//-------------App----------------
// import './index.css';
// import App from './app/app';
// import registerServiceWorker from './registerServiceWorker';
//
// render(<App />, document.getElementById('root'));
// registerServiceWorker();
//-----------------------------

//------------TODO_App-----------------
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import todoApp from './todo/reducers'
// import App from './todo/components/App'
//
// let store = createStore(todoApp)
// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// )
//-----------------------------

//--------------Courses---------------
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import axios from 'axios'
// import coursesApp from './courses/reducers'
// import App from './courses/components/App'
// import {initCourses} from './courses/actions'
//
// let store = createStore(coursesApp);
// axios.get('/courses.json')
//     .then(function(response) {
//         store.dispatch( initCourses(response) );
//     });
//
// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// )

//--------------Investments---------------
import './index.css';
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import App from './investments/components/App'
import registerServiceWorker from './registerServiceWorker';
import investmentApp from './investments/reducers'
import persistState from 'redux-localstorage'
const enhancer = compose(
    persistState(),
);
let store = createStore(investmentApp, enhancer);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();