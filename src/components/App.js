import React, { useState } from "react";
import SessionBreakComponent from "./SessionBreakComponent";
import Timer from "./Timer";
import "./App.css";

const App = () => {
  const [sessionLength, setSessionLength] = useState(25 * 60);
  const [breakLength, setBreakLength] = useState(5 * 60);
  const [sessionStart, setSessionStart] = useState(false);

  const handleAddSession = () => {
    if (!sessionStart) {
      if (sessionLength < 25 * 60) {
        setSessionLength(sessionLength + 60);
      }
    }
  };

  const handleMinusSession = () => {
    if (!sessionStart) {
      if (sessionLength > 1 * 60) {
        setSessionLength(sessionLength - 60);
      }
    }
  };

  const handleAddBreak = () => {
    if (breakLength < 5 * 60) {
      setBreakLength(breakLength + 60);
    }
  };

  const handleMinusBreak = () => {
    if (breakLength > 1 * 60) {
      setBreakLength(breakLength - 60);
    }
  };

  return (
    <div className="app ui container">
      <h2> Pomodoro Clock </h2>

      <div className="ui centered grid">
        <div className="custom-center four wide column">
          <SessionBreakComponent
            sessionOrBreak="Session"
            sessionOrBreakLength={sessionLength}
            handleAddSessionOrBreak={handleAddSession}
            handleMinusSessionOrBreak={handleMinusSession}
          />
        </div>
        <div className="custom-center four wide column">
          <SessionBreakComponent
            sessionOrBreak="Break"
            sessionOrBreakLength={breakLength}
            handleAddSessionOrBreak={handleAddBreak}
            handleMinusSessionOrBreak={handleMinusBreak}
          />
        </div>
      </div>

      <div className="ui centered grid">
        <Timer
          sessionLength={sessionLength}
          breakLength={breakLength}
          setSessionLength={setSessionLength}
          setSessionStart={setSessionStart}
        />
      </div>
    </div>
  );
};

export default App;
