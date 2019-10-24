import React, { useState } from "react";
import auth from "../RouteProtections/auth";
import axios from "axios";
import "../Settings/settings.css";

export default function formSubmit() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <div className="settings1">
      <div className="newContact">
        <h1>
          <label for="newContact">Add Emergency Contact</label>
        </h1>
      </div>

      <form className="addNewContact">
        <label for="fname"></label>
        <input
          type="text"
          id="fname"
          value={fname}
          name="firstname"
          onChange={event => setFname(event.target.value)}
          placeholder="First Name"
        ></input>

        <label for="lname"></label>
        <input
          type="text"
          id="lname"
          value={lname}
          name="lastname"
          onChange={event => setLname(event.target.value)}
          placeholder="Last Name"
        ></input>

        <label for="phone"></label>
        <input
          type="text"
          id="phone"
          value={mobile}
          name="mobile"
          onChange={event => setMobile(event.target.value)}
          placeholder="Mobile Number"
        ></input>

        <button
          type="submit"
          className="btn1"
          value="Submit"
          onClick={event => {
            // Preventing the default behavior of the form submit (which is to refresh the page)
            event.preventDefault();

            fetch("/api/contacts", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "authorization": "bearer "+auth.getToken()
              },
              body: JSON.stringify({
                contacts: [
                  {
                    firstName: fname,
                    lastName: lname,
                    phoneNumber: mobile
                  }
                ]
              })
            })
              .then(response =>{return response.json()})
              .then(response => {
                console.log(response);
                auth.login(response.token, ()=>{
                  alert("success!")
                })
              })
              .catch(error => {
                console.log(error);
              });
          }}
        ></button>
      </form>
    </div>
  );
}
