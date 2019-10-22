import React from "react";
import LoginHeader from "../components/LoginHeader";
import Form from "../components/Form";
import Footer from "../components/Footer";




function Login ({history}){
    return(
        <>
        <LoginHeader />
        <Form history={history}/>
        <Footer />
        </>
    )
}

export default Login;