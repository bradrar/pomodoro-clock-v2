import React from "react";
import Button from "./Button";

const BreakComponent = ({ breakLength, handleAddBreak, handleMinusBreak }) => {
  return (
    <div>
      Break
      <br />
      {breakLength}
      <Button
        handleAddClick={handleAddBreak}
        handleMinusClick={handleMinusBreak}
      />
    </div>
  );
};

export default BreakComponent;
