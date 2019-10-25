import React from "react";
import "./SOS.css";
import auth from "../RouteProtections/auth";

function SOS (){
    return(
        <button onClick={event=>{
            event.preventDefault();
            fetch("/api/alert", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "authorization": "bearer "+auth.getToken()
                },
                body: localStorage.getItem("LTLN")
              })
                .then(response =>{return response.json()})
                .then(response => {
                  console.log(response);
                  auth.login(response.token, ()=>{
                    localStorage.setItem("ISALERT", "true");
                    alert("SAFE STATE ALERT!");
                  })
                })
                .catch(error => {
                  console.log(error);
                })
        }} className="sosButton">S.O.S</button>
    )
}

export default SOS;