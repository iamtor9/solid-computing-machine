import React from "react";
import SignUpForm from "../../components/SignUpform";
import "./SignUp.css";




function SignUp ({history}){
    return(
        <>
           <SignUpForm history={history}/>
        </>
    )
}

export default SignUp;