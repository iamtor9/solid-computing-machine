import React, { Component, useState } from "react";
import Countdown from "react-countdown-now";
import auth from "../RouteProtections/auth";
import "./Timer.css";

class Timer extends Component {
  state = {
    clickCount: 0,
    isActive: false,
    secondsElapsed: 10000 / 1000 //time in seconds
  };

  getHours() {
    return ("0" + Math.floor(this.state.secondsElapsed / 3600)).slice(-2);
  }

  getMinutes() {
    return ("0" + Math.floor((this.state.secondsElapsed % 3600) / 60)).slice(
      -2
    );
  }

  getSeconds() {
    return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
  }

  pauseTime = () => {
    clearInterval(this.countdown);
    this.setState({ isActive: false });
  };

  startTime = () => {
    console.log("start");
    this.setState({
      clickCount: 0
    });
    this.setState({ isActive: true });
    this.countdown = setInterval(() => {
      console.log("interval");
      this.setState(({ secondsElapsed }) => ({
        secondsElapsed: secondsElapsed - 1
      }));
      if (this.state.secondsElapsed % 2 === 0) {
        this.setState({
          clickCount: 0
        });
      }
      if (this.state.secondsElapsed <= 0) {
        this.onComplete();
        this.resetTime(true);
      }
    }, 1000);
  };

  onComplete() {
    fetch("/api/alert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "bearer " + auth.getToken()
      },
      body: localStorage.getItem("LTLN")
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);
        auth.login(response.token, () => {
          alert("SAFE STATE ALERT!");
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  resetTime = isDone => {
    console.log("reset");
    this.setState({
      clickCount: this.state.clickCount + 1
    });
    if (this.state.clickCount >= 2 || isDone && this.state.isActive) {
      clearInterval(this.countdown);
      this.setState({
        secondsElapsed: 10000 / 1000,
        isActive: false,
        clickCount: 0
      });
    }
  };

  render() {
    return (
      <div onClick={() => this.resetTime(false)} className="ourTimer">
        <>
          <span className="bloc-timer"> {this.getHours()}</span>
          <span className="bloc-timer"> :{this.getMinutes()}</span>
          <span className="bloc-timer"> :{this.getSeconds()}</span>

          <button
            className="stop"
            onClick={this.state.isActive ? this.pauseTime : this.startTime}
          >
            Start/Stop
          </button>
        </>
      </div>
    );
  }
}

export default Timer;
