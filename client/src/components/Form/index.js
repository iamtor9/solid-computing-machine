import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    userName: "",
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.userName || !this.state.email) {
      alert("Fill out your username please!");
    } else if (this.state.password.length < 6) {
      alert(`Choose a more secure password`);
    }

    this.setState({
      userName: "",
      email: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <h1 className="signup">Login</h1>
        <form className="form">

          <br />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
        </form>
        <button className="btn" onClick={this.handleFormSubmit}>
        Submit
        </button>
        <div>
            <h1 className="register"> <hr></hr></h1>
           
            <button className="btn btnSignUp" onClick={this.handleFormSubmit}>
        Sign Up!
        </button>
          </div>
          <div className="backgroundBox">
          </div>
          <div className="backgroundBox2">
          </div>
      </div>
    );
  }
}

export default Form;
