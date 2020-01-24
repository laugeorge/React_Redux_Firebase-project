import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'


const rootReducer =  combineReducers({
    auth: authReducer,

    // the state from 'projectReducer' will store under project property
    project: projectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})


export default rootReducer