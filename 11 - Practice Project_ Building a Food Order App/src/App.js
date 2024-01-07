import React from "react";
import Header from "./components/Layouts/Header.js";
import Meals from "./components/Meals/Meals.js";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
