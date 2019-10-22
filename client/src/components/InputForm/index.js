import React from "react";
import "./InputForm.css";

function InputForm(){
    return (
    <form className="mainForm">
        <label>
        <h2>First Name:</h2>
            <input className="firstName" type="text" name="First Name" value="" />
        </label>
        <label>
        <h2>Last Name:</h2>
            <input className="lastName" type="text" name="Last Name" value=""  />
        </label>
        <label>
        <h2>Password:</h2>
            <input className="password" type="text" name="Password" value=""  />
        </label>
        <label>
            <h2>Enter Password Again:</h2>
            <input className="password" type="text" name="Passwords Must Match" value=""  />
        </label>
        <label>
            <h2>Pin:</h2>
            <input className="pin" type="text" name="Enter Your Pin" value=""  />
        </label>
        <label>
            <h2>Contact First Name:</h2>
            <input className="contactFirst" type="text" name="First Name" value="" />
        </label>
        <label>
            <h2>Contact Last Name:</h2>
            <input className="contactLast" type="text" name="Last Name" value=""  />
        </label>
        <label>
            <h2>Contact Phone Number:</h2>
            <input className="contactPhone" type="text" name="Last Name" value=""  />
        </label>
        <button className="button">
        Submit
        </button>
    </form>
    )
}

export default InputForm;