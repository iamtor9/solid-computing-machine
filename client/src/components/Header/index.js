import React from "react";
import Hamburger from "../Hamburger";
import "./Header.css";

function Header({}){
    return (
        <div className="navbar">
            <div></div>
            <div><h1 className="teamName">SafeState</h1></div>
            <div >
            <span><Hamburger /></span>
            </div>
        </div>
    )
}

export default Header;