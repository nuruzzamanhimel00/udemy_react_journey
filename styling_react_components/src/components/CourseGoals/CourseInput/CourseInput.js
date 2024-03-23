import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import style from "./CourseInput.module.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValide, setIsValide] = useState(true);

  const goalInputChangeHandler = (event) => {
    setIsValide(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValide(false);
      return;
    }
    setEnteredValue("");
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${style["form-control"]} ${
          !isValide ? style.isInValide : ""
        } `}
      >
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
