import React from "react";
import Header from "../components/Header";
import StartButton from "../components/StartButton";
import TimeSelect from "../components/TimeSelect";
import Footer from "../components/Footer";
import "./Home.css";



function Home () {
    return (
        <>
        <Header />
        <TimeSelect />
        <StartButton />
        <Footer />
        </>
    )
}

export default Home;