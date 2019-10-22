import React from "react";
import auth from "./auth";
import { PromiseProvider } from "mongoose";

export const LandingPage = () => {
    return (
        <div>
            <h1>LandingPage</h1>
            <button 
                onClick={() => {
                    auth.login(() => {
                        props.history.push("/app");
                        });
                    }}
                >
                Login
            </button>
        </div>
    );
};