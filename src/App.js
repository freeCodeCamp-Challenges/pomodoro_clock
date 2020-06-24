import React, { StyleSheet, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  // For the timer
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [totalTimeLeft, setTotalTimeLeft] = useState(0);

  useEffect(() => {
console.log('breakLength', breakLength);

    // Brake Length
    if (breakLength  <= 0||  breakLength >= 5) {
      setBreakLength(5);
    }

    // Session Length
    if (sessionLength  <= 0||  sessionLength >= 25) {
      setSessionLength(25);
    }
  }, [breakLength, setBreakLength, sessionLength, setSessionLength]);


  // For the timer
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds => seconds - 1);
      }
      if (seconds === 0 ) {
        if (minutes === 0 ) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes => minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    
    // if (corChoice || (!corChoice && choiceSave)) {
    //   clearInterval(myInterval);
    //   timerAnimation.stopAnimation();
    //   timerOpacity.stopAnimation();
    // }
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds, minutes]);


  return (
    <div>
      <h1 style={styles.pomodoroTitle}>Pomodoro Clock</h1>
      <div className="App" style={styles.container}>
        <div className="break-portion">
          <h3 id="break-label">Break Length</h3>
          <div style={styles.portionElements}>
            <div
              onClick={() => setBreakLength(num => num - 1)}
              style={styles.decrement}
              id="break-decrement"
            >
              -
            </div>
            <div style={styles.length} id="break-length">
              {breakLength}
            </div>
            <div
              onClick={() => setBreakLength(num => num + 1)}
              style={styles.increment}
              id="break-increment"
            >
              +
            </div>
          </div>
        </div>
        {/* /////////////////// */}
        <div className="timer-portion">
          <h2 id="timer-label">Session</h2>
          <h1 id="time-left">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
          <div style={styles.sessionButtons} id="start_stop">
            Start/Stop
          </div>
          <div id="reset">Reset</div>
        </div>
        {/* ///////////////// */}
        <div className="session-portion">
          <h3 id="session-label">Session Length</h3>
          <div style={styles.portionElements}>
            <div
              onClick={() => setSessionLength(num => num - 1)}
              style={styles.decrement}
              id="session-decrement"
            >
              -
            </div>
            <div style={styles.length} id="session-length">
              {sessionLength}
            </div>
            <div
              onClick={() => setSessionLength(num => num + 1)}
              style={styles.increment}
              id="session-increment"
            >
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
    fontSize: 30
  },
  decrement: {
    fontSize: 25
  },
  increment: {
    fontSize: 25
  },
  length: {},
  sessionButtons: {
    margin: 20,
    fontSize: 20
  }
});

export default App;
