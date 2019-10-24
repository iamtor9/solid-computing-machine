import React, {Component, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import auth from "../RouteProtections/auth";
import "./InputForm.css";
var is_valid_email = function(email) {
  return /^.+@.+\..+$/.test(email);
};

class InputForm extends Component {
  state= {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    passwordConfirm: "",
    contactFirst: "",
    contactLast: "",
    contactPhone: ""
  }

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

  handleSubmit = event => {
    event.preventDefault();
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.email ||
      !this.state.password ||
      !this.state.passwordConfirm ||
      !this.state.contactFirst ||
      !this.state.contactLast ||
      !this.state.contactPhone
    ) {
    } else if (this.state.password.length < 7 && this.state.password === this.state.passwordConfirm) {
      alert(`Choose a more secure password`);
    }else if (!is_valid_email(this.state.email)) {
      alert(`Choose a valid email`);
    } else {
      fetch("/api/signup", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          password: this.state.password,
          email: this.state.email,
          contacts: [
            {
              firstName: this.state.contactFirst,
              lastName: this.state.contactLast,
              phoneNumber: this.state.contactPhone
            }
          ]
        })
      })
        .then(response => {
          return response.json();
        })
        .then(response => {
          auth.login(response.token, () => {
            return this.props.history.push("/main");
          });
        })
        .catch(err => console.log(err));
    }

    this.state.firstName = "";
    this.state.lastName = "";
    this.state.password = "";
    this.state.confirm = "";
    this.state.contactFirst = "";
    this.state.contactLast = "";
    this.state.contactPhone = "";
    this.state.email = "";
  }


  render() {
  return (
    <form className="mainForm">
      <label>
        <h2>First Name:</h2>
        <input
          className="firstName"
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleInputChange}
        />
      </label>
      <label>
        <h2>Last Name:</h2>
        <input
          className="lastName"
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleInputChange}
        />
      </label>
      <label>
        <h2>Email:</h2>
        <input
          className="email"
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
      </label>
      <label>
        <h2>Password:</h2>
        <input
          className="password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
      </label>
      <label>
        <h2>Enter Password Again:</h2>
        <input
          className="password"
          type="password"
          name="passwordConfirm"
          value={this.state.passwordConfirm}
          onChange={this.handleInputChange}
        />
      </label>
      {/* <label>
        <h2>Pin:</h2>
        <input
          className="pin"
          type="text"
          name="Enter Your Pin"
          value={pin}
          onChange={event => setPin(event.target.value)}
        />
      </label> */}
      <label>
        <h2>Contact First Name:</h2>
        <input
          className="contactFirst"
          type="text"
          name="contactFirst"
          value={this.state.contactFirst}
          onChange={this.handleInputChange}
        />
      </label>
      <label>
        <h2>Contact Last Name:</h2>
        <input
          className="contactLast"
          type="text"
          name="contactLast"
          value={this.state.contactLast}
          onChange={this.handleInputChange}
        />
      </label>
      <label>
        <h2>Contact Phone Number:</h2>

        <input
          className="contactPhone"
          type="text"
          name="contactPhone"
          value={this.state.contactPhone}
          onChange={this.handleInputChange}
        />
      </label>
      <button
        className="button"
        onClick={this.handleSubmit}
      >
        Submit
      </button>
    </form>
  );
  }
}

export default InputForm;
