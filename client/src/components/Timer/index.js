import React, {useState} from 'react';
import Countdown from 'react-countdown-now';
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
         onComplete={() => alert("Timer Ran Out")}
         onPause={() => setTime(time + setTime + 50000)}
         />
         <button className="stop" onClick={() => setAuto(true)}>Start/Stop</button>
        </>
        </div>
    )
}

export default Timer;
