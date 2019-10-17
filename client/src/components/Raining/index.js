import React, { Component } from 'react';
import ReactRain from 'react-rain-animation';
import Knob from 'react-canvas-knob';
import 'react-rain-animation/lib/style.css';
 
const initVal = 25;
 
class MyComponent extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      numDrops: initVal,
      knobValue: initVal
    };
  }
 
  handleChange = newValue => {
    this.setState({ knobValue: newValue });
  }
 
  onChangeEnd = () => {
    console.log(this.state.numDrops);
    this.setState({ numDrops: this.state.knobValue });
  }
 
  render() {
    return (
      <div>
        <ReactRain numDrops={ this.state.numDrops }/>
 
        <Knob className="Knob"
          onChange={ this.handleChange }
          onChangeEnd={ this.onChangeEnd }
          value={ this.state.knobValue }
        /> 
      </div>
    );
  }
}
 
export default MyComponent;