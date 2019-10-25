import React, {useState} from 'react';
import Countdown from 'react-countdown-now';
import auth from "../RouteProtections/auth";
import "./Timer.css";
 


function Timer(props){

    const [time, setTime] = useState(60000 * 2);
    const [auto, setAuto] = useState(false);

    return(
        <div className="ourTimer">
        <>
         <Countdown 
         date={Date.now() + time} 
         autoStart={auto}
         onPause={() => setTime(time + setTime + 50000)}
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
         <button className="stop" onClick={() => setAuto(true)}>Start/Stop</button>
        </>
        </div>
    )
}

export default Timer;
