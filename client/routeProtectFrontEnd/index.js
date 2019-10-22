import React from "react";
import ReactDom from "react-dom";
import {LandingPage} from "./landing page";
import {AppLayout} from "./app.layout";
import {ProtectedRoute} from "./protected.route";

import {
    BrowserRouter, 
    Route, 
    Switch
} from "react-router-dom";

//import the page that we want the login page to return to 
// home page? or main?
import {} from " ";
//import other needed pages here if we need to.

//import our main style css here ex:
import "../home.css"

function App() {
    return (
        <div className="App">
            <Switch>
            {/* home or main landing page goes below  */}
            <Route exact path="/" component={LandingPage}/>
            <ProtectedRoute exact path="/app" component={AppLayout} />
            {/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
            </Switch>
        </div>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootElement );