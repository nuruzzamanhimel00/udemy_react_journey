import classes from "./Cart.module.css";
import Modal from "../UI/Modal.js";
import CartContext from "../../store/cart-context.js";
import { useContext } from "react";
import CartItem from "./CartItem.js";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const addCartItemHandler = (item) => {
    cartCtx.addItem(item);
    console.log("add imte", item);
  };
  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
    console.log("remove ", id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item, index) => (
        <CartItem
          key={index}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler}
          onRemove={removeCartItemHandler}
        />
      ))}
    </ul>
  );
  const totalAmount = cartCtx.items.reduce((number, item) => {
    return number + parseFloat(item.price) * +item.amount;
  }, 0);

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
