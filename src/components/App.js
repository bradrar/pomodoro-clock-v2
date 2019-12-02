import React, { useState } from "react";
import SessionBreakComponent from "./SessionBreakComponent";
import Timer from "./Timer";
import "./App.css";

const App = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  const handleAddSession = () => {
    if (sessionLength < 25) {
      setSessionLength(sessionLength + 1);
    }
  };

  const handleMinusSession = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
    }
  };

  const handleAddBreak = () => {
    if (breakLength < 5) {
      setBreakLength(breakLength + 1);
    }
  };

  const handleMinusBreak = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
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
        <Timer sessionLength={sessionLength} breakLength={breakLength} />
      </div>
    </div>
  );
};

const convert = time => {
  const sec_convert = time * 60;
  var sec_num = parseInt(sec_convert, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  console.log(`${minutes}:${seconds}`);
};

export default App;
