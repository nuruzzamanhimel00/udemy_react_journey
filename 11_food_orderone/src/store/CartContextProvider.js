import CartContext from "./cart-context.js";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // console.log("state, action", state, action);
  if (action.type === "ADD") {
    let totalAmount = 0;
    // if (state.items.length > 0) {
    let findItem = state.items.find((item) => item.id === action.item.id);
    if (findItem) {
      findItem.amount = findItem.amount + action.item.amount;
      totalAmount = state.items.reduce((curNumber, item) => {
        return curNumber + item.price * item.amount;
      }, 0);
      return {
        items: state.items,
        totalAmount: totalAmount,
      };
    } else {
      let totalItems = state.items.concat(action.item);
      totalAmount = state.items.reduce((curNumber, item) => {
        return curNumber + item.price * item.amount;
      }, 0);
      return {
        items: totalItems,
        totalAmount: totalAmount,
      };
    }
    // }
  } else if (action.type === "REMOVE") {
    let findItem = state.items.find((item) => item.id === action.id);
    if (findItem && findItem.amount > 0) {
      findItem.amount = findItem.amount - 1;
      let totalAmount = state.items.reduce((curNumber, item) => {
        return curNumber + item.price * item.amount;
      });
      if (findItem.amount === 0) {
        let totalItems = state.items.filter((item) => item.id !== action.id);
        // console.log(totalItems);
        let totalAmount =
          totalItems.length > 0
            ? totalItems.reduce((curNumber, item) => {
                return curNumber + item.price * item.amount;
              })
            : 0;
        return {
          items: totalItems,
          totalAmount: totalAmount,
        };
      }
      return {
        items: state.items,
        totalAmount: totalAmount,
      };
    } else {
      let totalItems = state.items.filter((item) => item.id !== action.id);
      let totalAmount = state.items.reduce((curNumber, item) => {
        return curNumber + item.price * item.amount;
      });
      return {
        items: totalItems,
        totalAmount: totalAmount,
      };
    }
  }
  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  // console.log("cartState", cartState);
  const addItemCartHandler = (item) => {
    // console.log("add item handler", item);
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
    // console.log(item);
  };
  const removeCatItemHander = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };
  const CartContextValue = {
    items: cartState.items,
    totalAmount: 10,
    addItem: addItemCartHandler,
    removeItem: removeCatItemHander,
  };

  return (
    <CartContext.Provider value={CartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
