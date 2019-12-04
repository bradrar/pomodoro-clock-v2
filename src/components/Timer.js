import React, { useState, useEffect } from "react";
import Alarm from "./Alarm";

const Timer = ({
  sessionLength,
  setSessionLength,
  breakLength,
  setBreakLength,
  setSessionStart,
  sessionStart,
  userSession,
  userBreak
}) => {
  const [paused, setPaused] = useState(true);
  const [breakTime, setBreakTime] = useState(false);

  const handleSessionPlay = () => {
    setSessionStart(true);
  };

  const handleSessionPause = () => {
    setSessionStart(false);
    document.getElementById("sound").pause();
    document.getElementById("sound").currentTime = 0; //add this to reset audio
  };

  const handleBreakPlay = () => {
    document.getElementById("sound").pause();
    document.getElementById("sound").currentTime = 0; //add this to reset audio
    setBreakTime(false);
  };

  const handleBreakPause = () => {
    setBreakTime(true);
    document.getElementById("sound").pause();
    document.getElementById("sound").currentTime = 0; //add this to reset audio
  };

  const handleReset = () => {
    setSessionStart(false);
    setSessionLength(25 * 60);
    document.getElementById("sound").pause();
    document.getElementById("sound").currentTime = 0; //add this to reset audio
  };

  useEffect(() => {
    if (!sessionLength) {
      document.getElementById("sound").play();
      setBreakTime(true);

      return;
    }
    const int = setInterval(() => {
      if (sessionStart) {
        setSessionLength(s => s - 1);
      }
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, [sessionStart, sessionLength, setSessionLength, paused, setBreakLength]);

  //useEffect from BreakTime
  useEffect(() => {
    if (!breakLength) {
      document.getElementById("sound").play();
      setSessionLength(userSession);
      setBreakTime(false);
      setBreakLength(userBreak);
      return;
    }
    const int = setInterval(() => {
      if (breakTime) {
        setBreakLength(s => s - 1);
      }
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, [setSessionLength, breakLength, breakTime, paused, setBreakLength]);

  const playButton = !sessionStart ? "Play" : "Pause";
  const breakButton = !breakTime ? "Play" : "Pause";

  const remainingSessionTime = `${Math.floor(sessionLength / 60)}:${(
    "00" +
    (sessionLength % 60)
  ).slice(-2)}`;

  const remainingBreakTime = `${Math.floor(breakLength / 60)}:${(
    "00" +
    (breakLength % 60)
  ).slice(-2)}`;

  const sessionOnClick =
    !sessionStart && !breakTime ? handleSessionPlay : handleSessionPause;

  const breakOnClick = !breakTime ? handleBreakPause : handleBreakPlay;

  return (
    <div>
      <h3> {sessionLength ? remainingSessionTime : remainingBreakTime}</h3>
      <button
        onClick={sessionLength ? sessionOnClick : breakOnClick}
        className="ui primary button"
      >
        {" "}
        {sessionLength ? playButton : breakButton}{" "}
      </button>
      <button onClick={handleReset} className="ui red basic button">
        {" "}
        Reset{" "}
      </button>
      <Alarm />
    </div>
  );
};

export default Timer;
