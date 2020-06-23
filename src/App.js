import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div>
        <h4 id="break-decrement">-</h4>
      </div>
      <div>
        <h4 id="break-increment">+</h4>
      </div>
      <div>
        <h3 id="break-label">Break Length</h3>
      </div>
      <div>
        <h3 id="break-length">5</h3>
      </div>
      {/* ///////////////// */}
      <div>
        <h4 id="session-decrement">-</h4>
      </div>
      <div>
        <h4 id="session-increment">+</h4>
      </div>
      <div>
        <h3 id="session-label">Session Lenght</h3>
      </div>
      <div>
        <h3 id="session-length">25</h3>
      </div>
      <div>
        <h2 id="timer-label">Session</h2>
      </div>
      <div>
        <h1 id="time-left">25:00</h1>
      </div>
      <div id="start_stop">Start/Stop</div>
      <div id="reset">Reset</div>
    </div>
  );
}

export default App;
