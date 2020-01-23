import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    // the state from 'projectReducer' will store under project property
    project: projectReducer

});

export default rootReducer