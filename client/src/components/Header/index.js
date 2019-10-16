import React from "react";
import Hamburger from "../Hamburger";
import "./Header.css";

function Header({}){
    return (
        <div className="navbar">
            <div>Location Placeholder</div>
            <div>SafeState</div>
            <div >
            <span><Hamburger /></span>
            </div>
        </div>
    )
}

export default Header;