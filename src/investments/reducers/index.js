import { combineReducers } from 'redux'
import tools from './tools'
import investments from './investment';
import app from './app'
import ui from './ui/index'

const investmentsApp = combineReducers({
    tools,
    investments,
    ui,
    app
})

export default investmentsApp