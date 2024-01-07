import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <>
      <div
        className={`${classes.control} ${
          props.isValied === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.type}>{props.label}</label>
        <input
          type={props.type || "text"}
          id={props.type}
          value={props.value}
          onChange={props.onEmailChangeHandler}
          onBlur={props.onValidateEmailHandler}
        />
      </div>
    </>
  );
};

export default Input;
