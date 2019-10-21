import React from "react"
import Settings from "../components/Settings"
import Header from "../components/Header"
import Footer from "../components/Footer"


function settings () {
    return (

<>

<Header />
<Settings />
<Footer />

</>
)   
}

// Submit new password form function.
// $(document).on('click','.btn1',function(e){
//     // this will prevent form and reload page on submit.
//     e.preventDefault();

//     const newPass = document.getElementById("npass").data;
//     const confirmPass = document.getElementById("cpass").data;
  
//     // Ajax call here.
//    $.ajax({
//                   type:'POST',
//                   url:'/',
//                   newPass: { newPass.data },
//                   confirmPass: { confirmPass.data },
//                   success:function(data)
//                   {
//                     alert('you have updated succesfully updated your password!');
//                   }
//                 })
//             })
    
   

export default settings;