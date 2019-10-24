import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp/SignUp";
import ProtectedRoute from "./components/RouteProtections/protected.route"
import LogoutRoute from "./components/RouteProtections/logout"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/home" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <LogoutRoute exact path="/logout" />
          <ProtectedRoute exact path="/main" component={Main} />
          <ProtectedRoute exact path="/settings" component={Settings} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;