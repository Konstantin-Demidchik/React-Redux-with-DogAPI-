import React, { Component } from 'react';

import MainPageComponent from './Components/MainPageComponents/MainPageComponent'
import DogApiComponent from './Components/DogApiPageComponents/DogApiComponent'
import ChatComponent from './Components/ChatPageComponents/ChatComponent'
import HeaderNav from './Components/HeaderNav/HeaderNav'

import {Route, BrowserRouter} from 'react-router-dom'



class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderNav/>
          <Route exact path = '/' component = {MainPageComponent}/>
          <Route exact path = '/dogapi' component = {DogApiComponent}/>
          <Route exact path = '/chat' component = {ChatComponent}/>
        </div>

      </BrowserRouter>

    );
  }
}

export default App;
