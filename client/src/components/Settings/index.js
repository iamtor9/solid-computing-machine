import React, { useState } from "react";
import axios from "axios"
import "../Settings/settings.css";


export default function formSubmit () {

    const [opass, setOpass] = useState("")
    const [npass, setNpass] = useState("")
    const [cpass, setCpass] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [mobile, setMobile] = useState("")

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
          value= {opass}
          name="oldPassword"
          onChange={(event) => setOpass(event.target.value)}
          placeholder="Old Password"
        ></input>

        <label for="newPassword"></label>
        <input
          type="text"
          id="npass"
          value= {npass}
          name="newPassword"
          onChange={(event) => setNpass(event.target.value)}

          placeholder="New Password"
        ></input>

        <label for="confirmPassword"></label>
        <input
          type="text"
          id="cpass"
          value= {cpass}
          name="confirmPassword"
          onChange={(event) => setCpass (event.target.value)}
          placeholder="Confirm New Password"
        ></input>

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
          value= {fname}
          name="firstname"
          onChange={(event) => setFname (event.target.value)}
          placeholder="First Name"
        ></input>

        <label for="lname"></label>
        <input
          type="text"
          id="lname"
          value= {lname}
          name="lastname"
          onChange={(event) => setLname (event.target.value)}
          placeholder="Last Name"
        ></input>

        <label for="phone"></label>
        <input 
          type="text" 
          id="phone"
          value= {mobile}
          name="mobile"
          onChange={(event) => setMobile (event.target.value)} 
          placeholder="Mobile Number"></input>

        <button type="submit" className="btn1" value="Submit" onClick={event => {
          // Preventing the default behavior of the form submit (which is to refresh the page)
          event.preventDefault();

          alert("Hello");
          setOpass("");
          setNpass("");
          setCpass("");
          setFname("");
          setLname("");
          setMobile("");
          console.log(opass)
          console.log(npass)
          console.log(cpass)
          console.log(fname)
          console.log(lname)
          console.log (mobile)


        }}>Submit</button>      
        </form>
    </div>
  );
}


