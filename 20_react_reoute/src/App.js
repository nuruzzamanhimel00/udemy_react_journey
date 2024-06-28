import React, { lazy, Suspense } from 'react'
import { Route, Switch } from "react-router-dom";

// import Welcome from "./pages/Welcome.js";
// import Product from "./pages/Product.js";
// import Home from './pages/Home.js'
import MainHeader from './components/MainHeader.js'
// import ProductDetails from './components/ProductDetails.js'
import NotMatch from './components/NotMatch.js'


function App() {

  
  const Home = lazy(() => delayForDemo(import('./pages/Home.js')));
  const Welcome = lazy(() => delayForDemo(import('./pages/Welcome.js')));
  const Product = lazy(() => delayForDemo(import('./pages/Product.js')));
  const ProductDetails = lazy(() => delayForDemo(import('./components/ProductDetails.js')));
  
  const delayForDemo = (promise)=> {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    }).then(() => promise);
  }
  

  return (
    <div className="App">
      <div>
        <MainHeader />
      </div>
      <hr/>
      <div>
        <Suspense fallback="Loading...">
          <Switch >
            <Route exact  path="/" ><Home /> </Route>
            <Route path="/welcome" ><Welcome /> </Route>
            <Route  path="/product" exact ><Product /> </Route>
            <Route path="/product/:slug" ><ProductDetails /> </Route>
            <Route path="*">
              <NotMatch />
            </Route>
          </Switch>

        </Suspense>
      
    
      </div>

    </div>
  );
}

export default App;
