import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div className="break-portion">
        <h3 id="break-label">Break Length</h3>
        <h4 id="break-decrement">-</h4>
        <h3 id="break-length">5</h3>
        <h4 id="break-increment">+</h4>
      </div>

      {/* ///////////////// */}
      <div className="session-portion">
        <h3 id="session-label">Session Lenght</h3>
        <h4 id="session-decrement">-</h4>
        <h3 id="session-length">25</h3>
        <h4 id="session-increment">+</h4>
      </div>
      <div className="timer-portion">
        <h2 id="timer-label">Session</h2>
        <h1 id="time-left">25:00</h1>
        <div id="start_stop">Start/Stop</div>
        <div id="reset">Reset</div>
      </div>
    </div>
  );
}

export default App;
