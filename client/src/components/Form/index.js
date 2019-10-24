import React, { Component } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import auth from "../RouteProtections/auth";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
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
    if (this.state.email) {
      fetch("/api/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }) // body data type must match "Content-Type" header
      })
        .then(response => {
          return response.json();
        })
        .then(response => {
          alert(JSON.stringify(response))
          auth.login(response.token, () => {
            return this.props.history.push("/home");
          });
        })
        .catch(err => {
          console.log(err);
          alert("ERROR");
        });
    } else if (!this.state.password || !this.state.email) {
      alert("Enter valid email or password");
    }

    this.setState({
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
          Login
        </button>
        <div>
          <h1 className="register">
            {" "}
            <hr></hr>
          </h1>

          <button
            className="btn btnSignUp"
            onClick={() => this.props.history.push("/signup")}
          >
            Sign Up!
          </button>
        </div>
        <div className="backgroundBox"></div>
        <div className="backgroundBox2"></div>
      </div>
    );
  }
}

export default Form;
