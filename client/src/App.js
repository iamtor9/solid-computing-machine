import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ContactCreate from "./pages/ContactCreate";
import Main from "./pages/Main";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contacts" component={ContactCreate} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/settings" component={Settings} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;