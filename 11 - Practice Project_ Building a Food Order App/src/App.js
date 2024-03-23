import React, { useState } from "react";
import Header from "./components/Layouts/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";
import CartProvider from "./store/CartProvider.js";
function App() {
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);

  const openCartModal = () => {
    setIsOpenCartModal(true);
  };

  const closeCartModal = () => {
    setIsOpenCartModal(false);
  };

  return (
    <CartProvider>
      {isOpenCartModal && <Cart onCloseModal={closeCartModal} />}
      <Header onOpenCartModal={openCartModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
