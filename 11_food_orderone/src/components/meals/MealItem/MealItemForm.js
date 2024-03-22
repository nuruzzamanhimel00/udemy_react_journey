import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const amount = useRef(0);
  const [errorState, setState] = useState(false);
  const formSubmitHandler = (event) => {
    event.preventDefault();

    let currentAmount = amount.current.value;
    if (
      currentAmount.trim().length === 0 ||
      +currentAmount < 1 ||
      +currentAmount > 10
    ) {
      // console.log("error");
      setState(true);
      return false;
    }
    props.onAddToCart(+currentAmount);
    setState(false);
    // console.log("submit", amount.current.value);
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={amount}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",

          step: "1",
          defaultValue: "1",
        }}
      />
      {errorState && <p>Please enter a valid amount (1-10)</p>}
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
