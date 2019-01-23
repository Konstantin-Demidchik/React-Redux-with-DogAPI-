
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Panel, DropdownButton, MenuItem} from 'react-bootstrap'

import styles from './DogApiComponent.module.css'




class DogApiComponent extends Component {
  state = {
    arrayPhotoDogs: null,
    arrayNamesDogs: null
  }

  fillingArrayPhotoDogs = () => {
    this.props.gettingPhotoDogs.then( photo => this.setState({
      arrayPhotoDogs: photo.map( (link_photo) =>
        <Col xs={12} md={4}>
            <li><img src = {link_photo} width = "300px"/></li>
        </Col>
      )}));
  }

  fillingArrayNamesDogs = async () => {
    let namesObject;
    let namesArray = [];
    await this.props.libraryDog.then((names) => namesObject = names);

    for(let name in namesObject)
      namesArray.push(<option value = {name}>{name}</option>);

    this.setState({arrayNamesDogs: namesArray});
  }

  handleChangeInSelectButton = (event) => {
    this.props.WriteNewValueOnURL(event.target.value);
  }


  render() {
    if(this.state.arrayNamesDogs === null) {
            this.fillingArrayNamesDogs();
    }




    return (
      <div>
         <div className = {styles.title_media_dogapi}></div>
              <Grid>
                  <Row className="show-grid">

                    <Panel className = {styles.search_content_dogapi}>
                        <Panel.Body>

                          <Col xs={12} md={9}>
                            <span>
                              https://dog.ceo/api/breed/

                              <select className = {styles.select_button} onChange = {this.handleChangeInSelectButton}>{this.state.arrayNamesDogs}</select>
                              /images/random
                            </span>

                         </Col>

                            <Col xs={12} md={3}>
                                <button className = {styles.fetch_button} onClick = {this.fillingArrayPhotoDogs}>Fetch!</button>
                            </Col>
                        </Panel.Body>
                     </Panel>

                    <Row>
                        <ul className = {styles.photo_list}>{this.state.arrayPhotoDogs }</ul>
                    </Row>

            </Row>
    </Grid>

    </div>
    )
  }
}

export default connect(
  state => {
    return {gettingPhotoDogs: state.gettingPhotoDogs, libraryDog: state.libraryDog}
  },
  dispatch => {
    return{
      WriteNewValueOnURL:(name) => dispatch({type:'CHANGE_ARRAY_PHOTOS', payload: name })
    }
  }
)(DogApiComponent);
