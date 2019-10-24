import React, { useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import auth from "../RouteProtections/auth";
import "./InputForm.css";
var is_valid_email = function(email) {
  return /^.+@.+\..+$/.test(email);
};

function InputForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirm, setConfirm] = useState("");
  const [pin, setPin] = useState("");
  const [contactFirst, setContactFirst] = useState("");
  const [contactLast, setContactLast] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  return (
    <form className="mainForm">
      <label>
        <h2>First Name:</h2>
        <input
          className="firstName"
          type="text"
          name="First Name"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />
      </label>
      <label>
        <h2>Last Name:</h2>
        <input
          className="lastName"
          type="text"
          name="Last Name"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
      </label>
      <label>
        <h2>Email:</h2>
        <input
          className="email"
          type="text"
          name="Password"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </label>
      <label>
        <h2>Password:</h2>
        <input
          className="password"
          type="password"
          name="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </label>
      <label>
        <h2>Enter Password Again:</h2>
        <input
          className="password"
          type="password"
          name="Passwords Must Match"
          value={passwordConfirm}
          onChange={event => setConfirm(event.target.value)}
        />
      </label>
      <label>
        <h2>Pin:</h2>
        <input
          className="pin"
          type="text"
          name="Enter Your Pin"
          value={pin}
          onChange={event => setPin(event.target.value)}
        />
      </label>
      <label>
        <h2>Contact First Name:</h2>
        <input
          className="contactFirst"
          type="text"
          name="contact First"
          value={contactFirst}
          onChange={event => setContactFirst(event.target.value)}
        />
      </label>
      <label>
        <h2>Contact Last Name:</h2>
        <input
          className="contactLast"
          type="text"
          name="contact Last"
          value={contactLast}
          onChange={event => setContactLast(event.target.value)}
        />
      </label>
      <label>
        <h2>Contact Phone Number:</h2>

        <input
          className="contactPhone"
          type="text"
          name="Phone Number"
          value={contactPhone}
          onChange={event => setContactPhone(event.target.value)}
        />
      </label>
      <button
        className="button"
        onClick={event => {
          event.preventDefault();
          if (
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !passwordConfirm ||
            !pin ||
            !contactFirst ||
            !contactLast ||
            !contactPhone
          ) {
          } else if (password.length < 7 && password === passwordConfirm) {
            alert(`Choose a more secure password`);
          } else if (pin.length < 4) {
            alert(`Choose a more secure pin`);
          } else if (pin.length > 4) {
            alert(`Choose a shorter pin`);
          } else if (!is_valid_email(email)) {
            alert(`Choose a valid email`);
          } else {
            fetch("/api/signup", {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                password: password,
                email: email,
                pin: pin,
                contacts: [
                  {
                    firstName: contactFirst,
                    lastName: contactLast,
                    phoneNumber: contactPhone
                  }
                ]
              })
            })
              .then(response => {
                return response.json();
              })
              .then(response => {
                console.log(response);
                auth.login(response.token, () => {
                  return this.props.history.push("/home");
                });
              })
              .catch(err => console.log(err));
          }

          setFirstName("");
          setLastName("");
          setPassword("");
          setConfirm("");
          setPin("");
          setContactFirst("");
          setContactLast("");
          setContactPhone("");
          setEmail("");
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default InputForm;
