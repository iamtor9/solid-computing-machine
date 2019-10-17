import React from "react";
import LogoSvg from "./logo.svg";
import "./Logo.css"

function Logo(){
    return(
        <div><img className="ourLogo" src={LogoSvg}></img></div>
    )
}

export default Logo;