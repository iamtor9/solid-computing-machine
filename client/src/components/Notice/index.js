import React from "react";
import "./Notice.css";

function Notice (){
    if(window.innerWidth > 450){
        return (
            <div className="usePhone">
                <h1>Hey There, Please Use SafeState On Your Phone!</h1>
            </div>
        )
    }
}

export default Notice;