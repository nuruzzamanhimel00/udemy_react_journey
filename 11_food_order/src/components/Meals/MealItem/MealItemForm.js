import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input.js";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isValide, setIsValid] = useState(true);

  const mealSubmitHandler = (event) => {
    event.preventDefault();
    const enterAmount = amountInputRef.current.value;
    const enterAmountNumber = +enterAmount;
    if (
      enterAmountNumber.length === 0 ||
      enterAmountNumber < 1 ||
      enterAmountNumber > 5
    ) {
      setIsValid(false);
      // alert("Please enter a valid amount (1-5)");
      return false;
    }
    setIsValid(true);
    props.onAddToCart(enterAmountNumber);
    // console.log(amountInputRef.current.value, enterAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={mealSubmitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          // min: "1",
          // max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValide && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
