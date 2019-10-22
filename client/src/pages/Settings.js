import React from "react"
import axios from "axios"
import Settings from "../components/Settings"
import Header from "../components/Header"
import Footer from "../components/Footer"



export default class PasswordUpdate extends React.Component {
    state = {
      opass: '',
      npass: '',
      cpass: ''
    }
  
    handleChange = event => {
      this.setState({ name: event.target.value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        opass: this.state.opass,
        npass: this.state.npass,
        cpass: this.state.cpass
      };
  
      axios.post(``, { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
  
    render() {
      return (
        
<>

<Header />
<Settings />
<Footer />

</>
      )
    }
  }