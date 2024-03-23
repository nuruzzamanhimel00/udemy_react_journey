import CartIcon from "../carts/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context.js";
import { useContext, useEffect, useState } from "react";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isBump, setIsBump] = useState(false);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    console.log("use effer");
    if (items.length === 0) {
      setIsBump(false);
      return;
    }
    setIsBump(true);
    let clearBump = setTimeout(() => {
      setIsBump(false);
    }, 300);
    return () => {
      clearTimeout(clearBump);
    };
  }, [items]);

  const btnClasses = `${classes.button} ${isBump ? classes.bump : ""}`;

  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
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
