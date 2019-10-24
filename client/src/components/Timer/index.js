import React, {useState} from 'react';
import Countdown from 'react-countdown-now';
import auth from "../RouteProtections/auth";
import "./Timer.css";
 


function Timer(){

    return(
        <div className="ourTimer">
        <>
         <Countdown 
         date={Date.now() + 60000 * 2} 
         autoStart={false}
         //coop, this is where you can tie in nexmo. its set for an alert right now
         onComplete={() =>
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
                    alert("SAFE STATE ALERT!")
                  })
                })
                .catch(error => {
                  console.log(error);
                })
        }
         />
        </>
        </div>
    )
}

export default Timer;
