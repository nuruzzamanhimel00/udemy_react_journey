import React, { useState } from "react";
import Button from "../UI/Button.js";
import style from "./UserForm.module.css";
import Card from "../UI/Card.js";

const UserForm = (props) => {
  const [inputData, setInputData] = useState({
    name: "",
    age: "",
  });
  const nameChangeHandler = (e) => {
    setInputData((prevState) => {
      return {
        ...prevState,
        name: e.target.value,
      };
    });
    // console.log(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setInputData((prevState) => {
      return {
        ...prevState,
        age: e.target.value,
      };
    });
    // console.log(e.target.value);
  };

  const inputFormSubmitHandler = (e) => {
    e.preventDefault();
    if (
      inputData.name.trim().length === 0 ||
      inputData.age.trim().length === 0
    ) {
      alert("All field is required");
      return;
    }
    if (inputData.age.trim() < 1) {
      alert("Age cannot be negative (<1)");
      return;
    }
    props.onGetUserList({
      id: Math.random(),
      ...inputData,
    });
    setInputData({
      name: "",
      age: "",
    });
    // console.log(inputData);
  };
  return (
    <>
      <div className={style["user-section"]}>
        <Card>
          {/* <div className={style.card}> */}
          <div className="card-body">
            <form onSubmit={inputFormSubmitHandler}>
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label> <br />
                <input
                  type="text"
                  name="name"
                  value={inputData.name}
                  onChange={nameChangeHandler}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Age</label> <br />
                <input
                  type="number"
                  name="age"
                  value={inputData.age}
                  onChange={ageChangeHandler}
                />
              </div>
              <div class="form-group">
                <Button />
              </div>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
};

export default UserForm;
