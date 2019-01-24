import { combineReducers } from 'redux'
import {GET_NEW_ARRAY_PHOTO} from './action.js'

import {getResponsePhotoDogs, getLibraryNamesDogs} from './fetchDogApi.js'



const initialState = {
  gettingPhotoDogs: getResponsePhotoDogs('affenpinscher'),
  libraryDog: getLibraryNamesDogs()
}

function dogApiReducer(state = initialState, action) {
  if(action.type === GET_NEW_ARRAY_PHOTO) {
    return {
      ...state,
      gettingPhotoDogs: getResponsePhotoDogs(action.payload)
    }

  }
    return state;
}


function chatApiReducer(state = {}, action) {
  return state;
}


const mainReducer = combineReducers({
  dogApiReducer,
  chatApiReducer
})





export default mainReducer;
