import React from "react"
import Settings from "../components/Settings"
import Header from "../components/Header"
import axios from "axios"

function settings () {
    return (

<>

<Header />
<Settings />

</>
)   
}

function submitForm (f) {
    f.preventDefault()
const updatePassword = {
    url: '/api/settings',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      "authorization" : "bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVkYWRlMmJjMjllZWFjYzQ3MTZiNzg0MyIsImVtYWlsIjoiZ2Y1ZGRkNTU1NXNkZmdAZ21haWwuY29tIiwicGluIjoiMTI1NSIsImNvbnRhY3RzIjpbIjVkYWRlMmJjMjllZWFjYzQ3MTZiNzg0NCJdfSwiaWF0IjoxNTcxNjc2ODYwfQ.Z34hghKDCJ0jXNYVCPWXGBOA7rv8Asy8WqzqRhHr4lQ",
    },

    data: {
      password: "",
      newPass: "",
      confirmNewPass: "",
    }
  };
  
  axios(updatePassword)
    .then(response => {
      console.log(response.status);
    });
}

export default settings;