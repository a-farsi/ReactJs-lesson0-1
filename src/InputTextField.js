import React from "react";
import "./InputTextField.css";

const InputTextField = props => {
  return (
    <input
      className="inputTextFieldStyle"
      type="text"
      onChange={props.changed}
      value={props.name}
    ></input>
  );
};

export default InputTextField;
