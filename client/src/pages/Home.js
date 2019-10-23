import React from "react";
import withAuth from './withAuth';
import Header from "../components/Header";
import StartButton from "../components/StartButton";
import TimeSelect from "../components/TimeSelect";
import Footer from "../components/Footer";
import "./Home.css";

//this was added by Tori on oct.23 at 12am
//may need to remove all "withAuth" on this homepage.
//import withAuth from "./withAuth";



function Home () {
    return (
        <>
        {/* <Route path="/secret" component={withAuth(Secret)} /> */}
        <Header />
        <TimeSelect />
        <StartButton />
        <Footer />
        </>
    )
}

export default Home;
