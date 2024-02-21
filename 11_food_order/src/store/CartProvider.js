import CartContext from "./cart-context.js";
import React, { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log("action", action);
  if (action.type === "ADD") {
    let findItem = state.items.find((item) => item.id === action.item.id);
    if (findItem) {
      console.log("add if");
      findItem.amount = +findItem.amount + +action.item.amount;
      return {
        items: state.items,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    } else {
      console.log("add eles");
      let updateItems = state.items.concat(action.item);
      let updateTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updateItems,
        totalAmount: updateTotalAmount,
      };
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    console.log("addItemHandler", item);
    dispatchCartState({
      type: "ADD",
      item: item,
    });
  };
  const removeItemHandler = (id) => {};

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
