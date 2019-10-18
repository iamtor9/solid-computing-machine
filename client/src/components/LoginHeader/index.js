import React from "react";
import Logo from "../Logo";

function LoginHeader({}){
    return (
        <div className="navbar">
            <div><Logo /></div>
            <div><h1 className="teamName">SafeState</h1></div>
        </div>
    )
}

export default LoginHeader;