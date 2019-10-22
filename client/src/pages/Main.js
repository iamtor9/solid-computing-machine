import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SOS from "../components/SOS";
import Countdown from "../components/Countdown";
import Stop from "../components/Stop";
import Maps from "../components/Maps";


function Main (){
    return(
        <>
        <Header />
        <Countdown />
        <Maps />
        <SOS />
        <Stop />
        <Footer />
        </>
    )
}

export default Main;