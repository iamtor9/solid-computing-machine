import React, {useState} from 'react';
import Countdown from 'react-countdown-now';
import "./Timer.css";
 


function Timer(props){

    const [time, setTime] = useState(60000 * 2);
    const [auto, setAuto] = useState(true);
    const [completed, setCompleted] = useState(false);
    const [paused, setPaused] = useState(false);

   function handleClick(){
        if(paused === false){
            setPaused(true);
            setAuto(false)
            setCompleted(true);
        }
        else{
            setPaused(false);
        }
    }

    return(
        <div className="ourTimer">
        <>
         <Countdown 
         date={Date.now() + time} 
         autoStart={auto}
         onComplete={() => setCompleted(true)}
         onPause={() => setPaused(true)}
         />
         <button className="stop" onClick={() => handleClick()}>Start/Stop</button>
        </>
        </div>
    )
}

export default Timer;
