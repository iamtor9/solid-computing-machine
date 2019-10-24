import React from 'react';
import Countdown from 'react-countdown-now';
import "./Timer.css";
 


function Timer(){
    return(
        <div className="ourTimer">
        <>
         <Countdown date={Date.now() + 60000} />
        </>
        </div>
    )
}

export default Timer;