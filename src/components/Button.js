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
        {sessionOrBreakLength}{" "}
      </p>
      <button className="ui primary basic button" onClick={handleAddClick}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Button;
