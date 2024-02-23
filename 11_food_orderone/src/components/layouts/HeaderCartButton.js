import CartIcon from "../carts/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context.js";
import { useContext } from "react";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems =
    cartCtx.items.length > 0
      ? cartCtx.items.reduce((curNumber, item) => {
          return curNumber + item.amount;
        })
      : 0;
  return (
    <>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
