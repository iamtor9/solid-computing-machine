import React from "react";
import "./Hamburger.css"
import { slide as Menu } from 'react-burger-menu'
 
class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    return (
      <Menu right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">Settings</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Log Out</a>
      </Menu>
    );
  }
}

export default Hamburger;