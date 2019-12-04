import React from "react";

const Alarm = () => {
  return (
    <div>
      <audio id="sound" type="audio/mpeg">
        <source src="https://freesound.org/data/previews/69/69552_274531-lq.mp3" />
      </audio>
    </div>
  );
};

export default Alarm;
