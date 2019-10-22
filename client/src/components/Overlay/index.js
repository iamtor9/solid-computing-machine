import React from "react";
import "./Overlay.css";


function Overlay (){
    return (
       <body>
            <div className="message">Woops! It Looks Like You're Not On A Mobile Device, Please Use SafeState On Your Phone!</div>
            <div className="smokeBox"></div>
       </body>
    )
}

export default Overlay;