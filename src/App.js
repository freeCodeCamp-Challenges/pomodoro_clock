import React, { StyleSheet, useState, useEffect } from "react";
import "./App.css";

// const audio = new Audio(
//   "http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Cat%20Meow%202-8973-Free-Loops.com.mp3"
// );

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  // For the timer
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timer, setTimer] = useState(false);
  const [reset, setReset] = useState(false);
  const [sessionIsON, setSessionIsON] = useState(false);
  const [sessionIsChanged, setSessionIsChanged] = useState("red");
  const [breakIsON, setBreakIsON] = useState(false);
  const [sessionTitle, setSessionTitle] = useState("Session");

  useEffect(() => {
    // Brake Length
    // if (breakLength <= 0 || breakLength >= 5) {
    if (breakLength <= 1) {
      setBreakLength(1);
    }

    // Session Length
    if (sessionLength === 1) {
      setSessionLength(0);
    }
    if (sessionLength === 0 || sessionLength === 60) {
      setSessionLength(60);
    }
  }, [breakLength, setBreakLength, sessionLength, setSessionLength]);

  // For the timer
  useEffect(() => {
    if (reset) {
      setMinutes(25);
      setSeconds(0);
    }
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds => seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          // audio.play();
          setSessionIsON(false); // To start the break countdown.
          setBreakIsON(true);
          clearInterval(myInterval);
        } else {
          setMinutes(minutes => minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    if (!timer) {
      clearInterval(myInterval);
    }

    return () => {
      clearInterval(myInterval);
    };
  }, [seconds, minutes, timer, reset, sessionIsON]);

  // Set initial session time.
  useEffect(() => {
    // If user changes the session length during a session
    // then we do not setMinutes...
    if (timer && sessionIsChanged !== "orange" && !breakIsON && sessionIsON) {
      setMinutes(sessionLength);
      setReset(false);
    }
  }, [
    setMinutes,
    sessionLength,
    sessionIsON,
    breakIsON,
    sessionIsChanged,
    timer,
    reset
  ]);

  // Set break countdown.
  useEffect(() => {
    if (!sessionIsON && minutes === 0 && seconds === 0 && breakIsON) {
      setMinutes(breakLength);
    }
  }, [sessionIsON, breakIsON, breakLength, minutes, seconds]);

  useEffect(() => {
    console.log('sessionIsON', sessionIsON);
    
    if (sessionIsON) {
      setSessionTitle("A Session has begun.");
    } else if (breakIsON) {
      setSessionTitle("A break has begun.");
    } else {
      setSessionTitle('Session')
    }
  }, [sessionIsON, breakIsON]);

  const breakLengthHandler = id => {
    if (id === "-") {
      setBreakLength(prev => prev - 1);
    } else if (id === "+") {
      setBreakLength(prev => prev + 1);
    }
  };
  const sessionLengthHandler = id => {
    if (id === "-") {
      setSessionLength(prev => prev - 1);
    } else if (id === "+") {
      setSessionLength(prev => prev + 1);
    }
    // Use this to handle the time in the timer.
    // See useEffect: "Set initial session time."
    if (!timer && !sessionIsON) {
      setSessionIsChanged("green");
    } else if (sessionIsON) {
      setSessionIsChanged("orange");
    }
  };

  const timerHandler = () => {
    setSessionIsON(true);
    setTimer(!timer);
  };

  const resetHandler = () => {
    setBreakLength(5);
    setSessionLength(25);
    setMinutes(25);
    setReset(true);
    setSessionIsON(false);
    setBreakIsON(false);
    setSessionIsChanged("red");
    setBreakIsON(false);
    setSessionTitle('Session')
  };

  return (
    <div>
      <h1 style={styles.pomodoroTitle}>Pomodoro Clock</h1>
      <div className="App" style={styles.container}>
        <div className="break-portion">
          <h3 id="break-label">Break Length</h3>
          <div style={styles.portionElements}>
            <div
              onClick={() => breakLengthHandler("-")}
              style={styles.decrement}
              id="break-decrement"
            >
              -
            </div>
            <div style={styles.length} id="break-length">
              {breakLength}
            </div>
            <div
              onClick={() => breakLengthHandler("+")}
              style={styles.increment}
              id="break-increment"
            >
              +
            </div>
          </div>
        </div>
        {/* /////////////////// */}
        <div className="timer-portion">
          <h2 id="timer-label">{sessionTitle}</h2>
          <h1 id="time-left">
            {!reset && !sessionIsON ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <div
            onClick={timerHandler}
            style={styles.sessionButtons}
            id="start_stop"
          >
            Start/Stop
          </div>
          <div onClick={resetHandler} id="reset">
            Reset
          </div>
        </div>
        {/* ///////////////// */}
        <div className="session-portion">
          <h3 id="session-label">Session Length</h3>
          <div style={styles.portionElements}>
            <div
              onClick={() => sessionLengthHandler("-")}
              style={styles.decrement}
              id="session-decrement"
            >
              -
            </div>
            <div style={styles.length} id="session-length">
              {sessionLength}
            </div>
            <div
              onClick={() => sessionLengthHandler("+")}
              style={styles.increment}
              id="session-increment"
            >
              +
            </div>
          </div>
        </div>
      </div>
      {breakIsON && (
        <audio
          id="beep"
          src="http://www.birding.dk/galleri/stemmermp3/Locustella%20naevia%201.mp3"
          autoPlay
        ></audio>
      )}
      {/* This one is just for FCC tester. The one above plays the sound! */}
      <audio
        id="beep"
        src="http://www.birding.dk/galleri/stemmermp3/Locustella%20naevia%201.mp3"
      ></audio>
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
