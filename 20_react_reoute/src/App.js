import { Route } from "react-router-dom";

import Welcome from "./pages/Welcome.js";
import Product from "./pages/Product.js";
import MainHeader from './components/MainHeader.js'

function App() {
  return (
    <div className="App">
      <div>
        <MainHeader />
      </div>
      <div>
      <Route path="/welcome" ><Welcome /> </Route>
      <Route path="/product" ><Product /> </Route>
      </div>
      APP COmponet
    </div>
  );
}

export default App;
