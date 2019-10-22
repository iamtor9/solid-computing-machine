import React, {useState} from "react";
import LoginHeader from "../components/LoginHeader";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Overlay from "../components/Overlay";


const isMobile = window.innerWidth <= 450;



function Login ({history}){
    if(!isMobile){
        return(
            <>
            <Overlay />
            </>
        )
    }
    else{
        return(
            <>
            <LoginHeader />
            <Form history={history}/>
            <Footer />
            </>
        )
    }
}

export default Login;