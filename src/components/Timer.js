import React, { useState, useEffect } from "react";

const Timer = ({
  sessionLength,
  setSessionLength,
  breakLength,
  setSessionStart
}) => {
  const [paused, setPaused] = useState(true);
  const [breakTime, setBreakTime] = useState(false);
  const [seconds, setSeconds] = useState(sessionLength * 60);

  const handlePlay = () => {
    setPaused(false);
    setSessionStart(true);
  };

  const handlePause = () => {
    setPaused(true);
    setSessionStart(false);
  };

  const handleReset = () => {
    setPaused(true);
    setSessionLength(25);
  };

  useEffect(() => {
    if (!sessionLength) return;

    const int = setInterval(() => {
      if (!paused) {
        setSessionLength(s => s - 1);
      }
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, [sessionLength, setSessionLength, paused]);

  const playButton = paused ? "Play" : "Pause";

  return (
    <div>
      <h3>
        {`${Math.floor(sessionLength / 60)}:${(
          "00" +
          (sessionLength % 60)
        ).slice(-2)}`}
      </h3>
      <button
        onClick={paused ? handlePlay : handlePause}
        className="ui primary button"
      >
        {" "}
        {playButton}{" "}
      </button>
      <button onClick={handleReset} className="ui red basic button">
        {" "}
        Reset{" "}
      </button>
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

  return `${minutes}:${seconds}`;
};

export default Timer;
