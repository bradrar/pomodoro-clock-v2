import React from "react";

const Alarm = () => {
  const handleAudio = () => {
    document.getElementById("sound").play();
  };

  return (
    <div>
      {" "}
      this is the sound
      <button onClick={handleAudio}>audio</button>
      <audio id="sound" controls type="audio/mpeg">
        <source src="https://github.com/bradrar/pomodoro-clock-v2/blob/master/src/sound/alarm sound.mp3" />
      </audio>
    </div>
  );
};

export default Alarm;
