import React, { useState } from "react";
import SessionBreakComponent from "./SessionBreakComponent";
import Timer from "./Timer";
import "./App.css";

const App = () => {
  const [sessionLength, setSessionLength] = useState(25 * 60); //gawing 25*60 ulit
  const [breakLength, setBreakLength] = useState(5 * 60);
  const [sessionStart, setSessionStart] = useState(false);
  const [userSession, setUserSession] = useState(sessionLength);
  const [userBreak, setUserBreak] = useState(breakLength);

  const handleAddSession = () => {
    if (!sessionStart) {
      if (sessionLength < 60 * 60) {
        setSessionLength(sessionLength + 60);
        setUserSession(sessionLength + 60);
      }
    }
  };

  const handleMinusSession = () => {
    if (!sessionStart) {
      if (sessionLength > 1 * 60) {
        setSessionLength(sessionLength - 60);
        setUserSession(sessionLength - 60);
      }
    }
  };

  const handleAddBreak = () => {
    if (!sessionStart) {
      if (breakLength < 10 * 60) {
        setBreakLength(breakLength + 60);
        setUserBreak(breakLength + 60);
      }
    }
  };

  const handleMinusBreak = () => {
    if (!sessionStart) {
      if (breakLength > 1 * 60) {
        setBreakLength(breakLength - 60);
        setUserBreak(breakLength - 60);
      }
    }
  };

  return (
    <div className="app ui container">
      <h2> Pomodoro Clock </h2>
      <div className="ui centered grid">
        <div className="custom-center four wide column">
          <SessionBreakComponent
            sessionOrBreak="Session"
            sessionOrBreakLength={userSession}
            handleAddSessionOrBreak={handleAddSession}
            handleMinusSessionOrBreak={handleMinusSession}
          />
        </div>
        <div className="custom-center four wide column">
          <SessionBreakComponent
            sessionOrBreak="Break"
            sessionOrBreakLength={userBreak}
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
          setBreakLength={setBreakLength}
          sessionStart={sessionStart}
          userSession={userSession}
          userBreak={userBreak}
        />
      </div>
    </div>
  );
};

export default App;
