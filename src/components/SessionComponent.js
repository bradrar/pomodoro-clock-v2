import React from "react";
import Button from "./Button";

const SessionComponent = ({
  sessionLength,
  handleAddSession,
  handleMinusSession
}) => {
  return (
    <div>
      Session
      <br />
      {sessionLength}
      <Button
        handleAddClick={handleAddSession}
        handleMinusClick={handleMinusSession}
      />
    </div>
  );
};

export default SessionComponent;
