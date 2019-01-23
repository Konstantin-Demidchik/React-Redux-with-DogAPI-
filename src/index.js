import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import reducerApp from './reducers'






/*const initialState = {
  gettingPhotoDogs: getRequestOnPhotoDogs('affenpinscher'),
  libraryDog: getLibraryDogs()
}

function reducer(state = initialState, action) {
  if(action.type === 'CHANGE_ARRAY_PHOTOS') {

    return {
      ...state,
      gettingPhotoDogs: getRequestOnPhotoDogs(action.payload)
    }

  }
  return state;
} */

const store = createStore(reducerApp);

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
