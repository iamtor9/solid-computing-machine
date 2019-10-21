import React from "react";
import "../Settings/settings.css";

function Settings() {
  return (
    <div className="settings1">
      <div className="updatePassword">
        <h1>
          <label for="updatePassword">Change Password</label>
        </h1>
      </div>

      <form className="passWordUpdate">
      <label for="newPassword"></label>
        
        <input
          type="text"
          id="opass"
          name="oldPassword"
          placeholder="Old Password"
        ></input>

        <label for="newPassword"></label>
        <input
          type="text"
          id="npass"
          name="newPassword"
          placeholder="New Password"
        ></input>

        <label for="confirmPassword"></label>
        <input
          type="text"
          id="cpass"
          name="confirmPassword"
          placeholder="Confirm New Password"
        ></input>

        <button onclick="submitForm(this)" type="submit" className="btn1"  value="Submit"></button>
      </form>

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
          name="firstname"
          placeholder="First Name"
        ></input>

        <label for="lname"></label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Last Name"
        ></input>

        <label for="phone"></label>
        <input type="text" id="phone" name="" placeholder="Mobile Number"></input>

        <button type="submit" className="btn2" value="Submit"></button>
      </form>
    </div>
  );
}

export default Settings;
