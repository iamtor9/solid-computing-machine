import React from "react"
import "./notFound.css"

function notFound () {
    return (
<div className="div1">
<span>
    <div className="div2">
        <h2 className="wrongPage"> You reached the wrong page! 
            <button className="btn1" href="/home">Go Home</button>
        </h2>
    </div>
</span>
</div>
)   
}

export default notFound;
