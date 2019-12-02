import React, { useState, useEffect } from "react";

const Timer = ({ sessionLength, breakLength }) => {
  const [paused, setPaused] = useState(true);
  const [breakTime, setBreakTime] = useState(false);

  const handlePlay = () => {
    setPaused(false);
  };

  const handlePause = () => {
    setPaused(true);
  };

  const playButton = paused ? "Play" : "Pause";

  return (
    <div>
      <h3> {sessionLength} </h3>
      <button
        onClick={paused ? handlePlay : handlePause}
        className="ui primary button"
      >
        {" "}
        {playButton}{" "}
      </button>
      <button className="ui red basic button"> Reset </button>
    </div>
  );
};

export default Timer;
