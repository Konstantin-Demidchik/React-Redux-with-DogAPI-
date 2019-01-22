import React, { Component } from 'react';
import {Navbar,NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap'
import styles from './CssComponents/HeaderNav.module.css'


class HeaderNav extends Component {

  state = {
    classOnScroll: styles.navbar
  }

  componentDidMount() {
    window.onscroll = () => {
      if(!window.pageYOffset)
        document.getElementsByClassName(this.state.classOnScroll)[0].style.backgroundColor = 'transparent';
      else
        document.getElementsByClassName(this.state.classOnScroll)[0].style.backgroundColor = 'black';
    }
  }

  componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
          <Navbar className = {this.state.classOnScroll}>

            <Navbar.Header>
              <Navbar.Brand>
              <a href="/">Главная</a>
              </Navbar.Brand>
            </Navbar.Header>

           <Nav>
            <NavItem eventKey={1} href="/dogapi">DOG API</NavItem>
            <NavItem eventKey={2} href="/chat">Чат</NavItem>

            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} >Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
       </Navbar>
    )
  }
}

export default HeaderNav;
