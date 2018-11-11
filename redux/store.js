import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import * as actionTypes from './actionType';
import {updateObject} from '../lib/updateObject'


const exampleInitialState = {
    color: '#F8F8F8',
    navColor : 'black',
    bodyColor: 'black',
    colorC: false,
    token: null,
    gettoken: false
}


// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_COlOR_BLUE:
            return updateObject(state, {
                color: action.blue, 
                navColor: action.fontAblue,
                bodyColor:action.bodyColor,
                colorC: true
            })
        case actionTypes.CHANGE_COlOR_YELLOW:
            return updateObject(state, {
                color: action.yellow,
                navColor: action.fontAyellow,
                bodyColor: 'black',
                colorC: true
            })
        case actionTypes.CHANGE_COlOR_GREY:
            return updateObject(state, {
                color: action.grey,
                navColor: action.fontAgrey,
                bodyColor: 'black',
                colorC: true
            })
        case actionTypes.CHANGE_COlOR_AFTER_RE:
            return updateObject(state, {
                color: action.thiscolor,
                navColor: action.thisAcolor,
                bodyColor: action.bodyColor,    
                colorC: true
            })
        case actionTypes.AUTHENTICATE:
            return updateObject({token: action.payload,gettoken:false});
        case actionTypes.DEAUTHENTICATE:
            return updateObject({state,token: null,gettoken:true});
        case actionTypes.REAUTHENTICATE:
            return updateObject({state,token: action.payload});
        default: 
            return state
    }
}


export const initializeStore = (initialState = exampleInitialState) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
  }

