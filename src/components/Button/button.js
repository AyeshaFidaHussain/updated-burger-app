import React from "react";

import "./button.css";

function Button({ clickHandler, buttonVal, disabledCondition, className }) {
  return (
    <button
      onClick={clickHandler}
      disabled={disabledCondition}
      className={`${className}`}
    >
      {buttonVal}
    </button>
  );
}

export default Button;
