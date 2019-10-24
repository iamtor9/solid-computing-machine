import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SOS from "../components/SOS";
import Timer from "../components/Timer"
import Stop from "../components/Stop";
import Maps from "../components/Maps";

 


function Main (){

    return(
        <>
        <Header />
        <Timer 
        
        />
        <Maps />
        <SOS />
        <Stop 
        onClick={()=>{}}
        />
        <Footer />
        </>
    )
}

export default Main;