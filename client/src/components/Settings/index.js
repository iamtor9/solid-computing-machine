import React, { useState } from "react";
import axios from "axios"
import "../Settings/settings.css";


export default function formSubmit () {

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [mobile, setMobile] = useState("")

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
          
          fetch('/api/contacts', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVkYjA4M2UyNWFkM2EwZDkxYmM5NWEzNSIsImVtYWlsIjoidGVzdGVyNEB3ZWJzaXRlLmNvbSIsInBpbiI6IjEyMzQiLCJjb250YWN0cyI6WyI1ZGIwODNlMjVhZDNhMGQ5MWJjOTVhMzYiXX0sImlhdCI6MTU3MTg0OTE4Nn0.sQDjAlzkYOEuK_vFHGW1o9gkw22Y4uICsg2PzESTU0k"
              },
              body: JSON.stringify({
                "contacts": [{
                  "firstName": fname,
                  "lastName": lname,
                  "telephone": mobile
              }]
              })})
              .then(response => response.json())
          .then((response) => {
              console.log(response);
            }).catch((error) => {
              console.log(error);
            })
        }}
      >
        </button>      
        </form>
    </div>
  );
}


