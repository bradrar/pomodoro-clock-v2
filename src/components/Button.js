import React from "react";

const Button = ({ handleAddClick, handleMinusClick }) => {
  return (
    <div>
      <button onClick={handleMinusClick}> - </button>
      <button onClick={handleAddClick}> + </button>
    </div>
  );
};

export default Button;
