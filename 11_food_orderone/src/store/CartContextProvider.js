import CartContext from "./cart-context.js";

const CartContextProvider = (props) => {
  const addItemCartHandler = (item) => {
    console.log(item);
  };
  const removeCatItemHander = (id) => {
    console.log(id);
  };
  const CartContextValue = {
    items: [],
    totalAmount: 0,
    addItem: addItemCartHandler,
    removeItem: removeCatItemHander,
  };

  return (
    <CartContext.Provider value={CartContextValue}>
      {" "}
      {props.children}{" "}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
