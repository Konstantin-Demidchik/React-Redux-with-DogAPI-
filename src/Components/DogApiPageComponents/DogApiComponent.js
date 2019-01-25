
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Panel} from 'react-bootstrap'

import styles from './DogApiComponent.module.css'
import {getNewArrayPhoto} from '../../action.js'



class DogApiComponent extends Component {
  state = {
    arrayPhotoDogs: null,
    arrayNamesDogs: null
  }

  fillingArrayPhotoDogs = () => {
    this.props.gettingPhotoDogs.then( photo =>
      this.setState({arrayPhotoDogs: photo.map( (link_photo) =>
        <div key = {link_photo}>
        <Col xs={12} md={4}>
            <li key={link_photo}><img src = {link_photo} width = "300px" alt = {link_photo}/></li>
        </Col>
        </div>
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

const mapStateToProps = (state) => {
  return {
    gettingPhotoDogs: state.dogApiReducer.gettingPhotoDogs, libraryDog: state.dogApiReducer.libraryDog
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    WriteNewValueOnURL:(name) => dispatch(getNewArrayPhoto(name))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogApiComponent);
