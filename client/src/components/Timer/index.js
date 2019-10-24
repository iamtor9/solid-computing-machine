import React, {useState} from 'react';
import Countdown from 'react-countdown-now';
import "./Timer.css";
 


function Timer(){

    return(
        <div className="ourTimer">
        <>
         <Countdown 
         date={Date.now() + 60000 * 2} 
         autoStart={false}
         //coop, this is where you can tie in nexmo. its set for an alert right now
         onComplete={() => alert("Timer Ran Out")}
         />
        </>
        </div>
    )
}

export default Timer;
