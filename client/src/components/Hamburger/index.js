import React from "react";
import "./Hamburger.css"
import { slide as Menu } from 'react-burger-menu'
 
class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    return (
      <Menu onClick={ this.showSettings } right>
        <a id="home" className="menu-item" href="/home">Home</a>
        <a id="settings" className="menu-item" href="/settings">Settings</a>
        <a className="menu-item small logout" href="/logout">Log Out</a>
      </Menu>
    );
  }
}

export default Hamburger;