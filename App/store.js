import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import eventReducer from './reducers/event'
import messageReducer from './reducers/message'

const reducer = combineReducers({
    event: eventReducer
});

export default createStore(reducer)