import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

import Input from "../UI/Input/Input";

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const ctx = useContext(AuthContext);
  // // console.log("1");
  // useEffect(() => {
  //   console.log("2- User effect running");

  //   return () => {
  //     console.log("effect runningcleand up");
  //   };
  //   // console.log("User effect running");
  // }, [enteredPassword]);
  // useEffect(() => {
  //   // console.log("3");
  //   const identifier = setTimeout(() => {
  //     console.log(" 4 settimeout executed");
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 1000);

  //   return () => {
  //     clearTimeout(identifier);
  //     console.log("cleand up");
  //   };
  // }, [enteredEmail, enteredPassword]);
  // console.log("5");

  const emailRender = (state, action) => {
    if (action.type === "USER_INPUT") {
      return {
        value: action.val,
        isValied: action.val.includes("@"),
      };
    } else if (action.type === "INPUT_BLUR") {
      return {
        value: state.value,
        isValied: state.value.includes("@"),
      };
    }
    return {
      value: "",
      isValied: false,
    };
  };
  const [emailState, dispatchEmail] = useReducer(emailRender, {
    value: "",
    isValied: false,
  });

  const passwordReducer = (state, action) => {
    // console.log(action.value);
    if (action.type === "PASSWORD_INPUT") {
      return {
        value: action.value,
        isValied: action.value.length > 6 ? true : false,
      };
    } else if (action.type === "PASSWORD_BLUR") {
      return {
        value: state.value,
        isValied: state.value.length > 6 ? true : false,
      };
    }
    return {
      value: "",
      isValied: false,
    };
  };
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValied: false,
  });

  const emailChangeHandler = (event) => {
    // setEnteredEmail(emailState.value);
    dispatchEmail({
      type: "USER_INPUT",
      val: event.target.value,
    });

    setFormIsValid(emailState.isValied && passwordState.isValied);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: "PASSWORD_INPUT",
      value: event.target.value,
    });
    // setEnteredPassword(event.target.value);

    setFormIsValid(passwordState.isValied && emailState.isValied);
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: "INPUT_BLUR",
    });
    // setEmailIsValid(emailState.isValied);
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: "PASSWORD_BLUR",
    });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* #input  */}
        <Input
          isValied={emailState.isValied}
          value={emailState.value}
          onEmailChangeHandler={emailChangeHandler}
          onValidateEmailHandler={validateEmailHandler}
          type="email"
          label="E-Mail"
        />

        {/* <div
          className={`${classes.control} ${
            emailState.isValied === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div> */}
        <Input
          isValied={passwordState.isValied}
          value={passwordState.value}
          onEmailChangeHandler={passwordChangeHandler}
          onValidateEmailHandler={validatePasswordHandler}
          type="password"
          label="Password"
        />
        {/* <div
          className={`${classes.control} ${
            passwordState.isValied === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
