import React from "react";

const Button = ({ handleAddClick, handleMinusClick, sessionOrBreakLength }) => {
  return (
    <div>
      <button className="ui primary basic button" onClick={handleMinusClick}>
        {" "}
        -{" "}
      </button>
      <p style={{ display: "inline", marginRight: "3px" }}>
        {" "}
        {Math.ceil(sessionOrBreakLength / 60)}{" "}
      </p>
      <button className="ui primary basic button" onClick={handleAddClick}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Button;
