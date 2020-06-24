import React, { StyleSheet, useState } from "react";
import "./App.css";

function App() {
  const [breakDecrement, setBreakDecrement] = useState(5);
  const [breakIncrement, setBreakIncrement] = useState(5);
  const [sessionDecrement, setSessionDecrement] = useState(25);
  const [sessionIncrement, setSessionIncrement] = useState(25);

  return (
    <div>
      <h1 style={styles.pomodoroTitle}>Pomodoro Clock</h1>
      <div className="App" style={styles.container}>
        <div className="break-portion">
          <h3 id="break-label">Break Length</h3>
          <div style={styles.portionElements}>
            <div onClick={() => setBreakDecrement(num => num - 1)} style={styles.decrement} id="break-decrement">
              -
            </div>
            <div style={styles.length} id="break-length">
              {breakDecrement}
            </div>
            <div onClick={() => setBreakDecrement(num => num + 1)} style={styles.increment} id="break-increment">
              +
            </div>
          </div>
        </div>
        {/* /////////////////// */}
        <div className="timer-portion">
          <h2 id="timer-label">Session</h2>
          <h1 id="time-left">25:00</h1>
          <div id="start_stop">Start/Stop</div>
          <div id="reset">Reset</div>
        </div>
        {/* ///////////////// */}
        <div className="session-portion">
          <h3 id="session-label">Session Length</h3>
          <div style={styles.portionElements}>
            <div onClick={() => setSessionDecrement(num => num - 1)} style={styles.decrement} id="session-decrement">
              -
            </div>
            <div style={styles.length} id="session-length">
              {sessionDecrement}
            </div>
            <div onClick={() => setSessionDecrement(num => num + 1)} style={styles.increment} id="session-increment">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = (StyleSheet = {
  pomodoroTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  portionElements: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    fontSize: 20
  },
  decrement: {
    fontSize: 20
  },
  increment: {
    fontSize: 20
  },
  length: {}
});

export default App;
