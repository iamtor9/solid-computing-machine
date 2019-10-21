import React, { Component } from 'react';
import "./Welcome.css";

class Welcome extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
        <button className="click" onClick={this.showMenu}>
          Select Walk Timer
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button className="dropDown" value="5"> 5 Minutes </button>
                <button className="dropDown" value="10"> 10 Minutes </button>
                <button className="dropDown" value="15"> 15 Minutes </button>
                <button className="dropDown" value="20"> 20 Minutes </button>
                <button className="dropDown" value="25"> 25 Minutes </button>
                <button className="dropDown" value="30"> 30 Minutes </button>
                <button className="dropDown" value="35"> 35 Minutes </button>
                <button className="dropDown" value="40"> 40 Minutes </button>
                <button className="dropDown" value="45"> 45 Minutes </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Welcome;