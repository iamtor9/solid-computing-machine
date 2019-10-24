import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

const LogoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        auth.logout(() => {});
        return (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        );
      }}
    ></Route>
  );
};

export default LogoutRoute;
