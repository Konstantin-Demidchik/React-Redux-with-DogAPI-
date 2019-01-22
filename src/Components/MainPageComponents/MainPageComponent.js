import SlideShow from './PageComponents/SlideShowComponent'
import DescribeComponent from './PageComponents/DescribeComponent'
import InfoComponent from './PageComponents/InfoComponent'
import AboutComponent from './PageComponents/AboutComponent'
import React, { Component } from 'react';


class MainPageComponent extends Component {

  render() {
    return (
      <div>
        <SlideShow/>
        <DescribeComponent/>
        <InfoComponent/>
        <AboutComponent/>
      </div>
    )
  }
}

export default MainPageComponent;
