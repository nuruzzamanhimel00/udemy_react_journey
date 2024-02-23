import Header from "../src/components/layouts/Header.js";
import Meals from "./components/meals/Meal.js";
import Cart from "./components/carts/Cart.js";
import { useState } from "react";
import CartContextProvider from "./store/CartContextProvider.js";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartContextProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
