import { combineReducers } from 'redux'


const getRequestOnPhotoDogs = async (n) => {
  const apiDog = await fetch(`https://dog.ceo/api/breed/${n}/images`)
  .then(response => response.json());
    return apiDog.message;
}

const getLibraryDogs = async () => {
  const library = await fetch(`https://dog.ceo/api/breeds/list/all`)
  .then(response => response.json());

  return library.message;
}

const initialState = {
  gettingPhotoDogs: getRequestOnPhotoDogs('affenpinscher'),
  libraryDog: getLibraryDogs()
}





function dogApiReducer(state = initialState, action) {
  if(action.type === 'CHANGE_ARRAY_PHOTOS') {

    return {
      ...state,
      gettingPhotoDogs: getRequestOnPhotoDogs(action.payload)
    }

  }
  return state;
}

function chatApiReducer(state = {}, action) {
  return state;
}



export default dogApiReducer;
