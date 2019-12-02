import React from "react";
import Button from "./Button";

const SessionBreakComponent = ({
  sessionOrBreak,
  sessionOrBreakLength,
  handleAddSessionOrBreak,
  handleMinusSessionOrBreak
}) => {
  return (
    <div>
      <h3>{sessionOrBreak} </h3>
      <Button
        sessionOrBreakLength={sessionOrBreakLength}
        handleAddClick={handleAddSessionOrBreak}
        handleMinusClick={handleMinusSessionOrBreak}
      />
    </div>
  );
};

export default SessionBreakComponent;
