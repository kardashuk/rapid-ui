// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './app/app';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './todo/reducers'
import App from './todo/components/App'

let store = createStore(todoApp)
console.log(store.getState());
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)