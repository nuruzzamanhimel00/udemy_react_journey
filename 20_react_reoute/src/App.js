import { Route, Switch } from "react-router-dom";

import Welcome from "./pages/Welcome.js";
import Product from "./pages/Product.js";
import Home from './pages/Home.js'
import MainHeader from './components/MainHeader.js'
import ProductDetails from './components/ProductDetails.js'
import NotMatch from './components/NotMatch.js'

function App() {
  return (
    <div className="App">
      <div>
        <MainHeader />
      </div>
      <hr/>
      <div>
        <Switch>
          <Route exact  path="/" ><Home /> </Route>
          <Route path="/welcome" ><Welcome /> </Route>
          <Route  path="/product" exact ><Product /> </Route>
          <Route path="/product/:slug" ><ProductDetails /> </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
    
      </div>

    </div>
  );
}

export default App;
