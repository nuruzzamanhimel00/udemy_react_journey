import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect, useCallback } from 'react'
//redux
import { useDispatch } from 'react-redux'
import {cartActions} from './store/cart-slice.js'

function App() {
  const dispatch = useDispatch();
  const fetchDatas = useCallback(async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/get-all-post");
      // console.log(response);
      if (response.status !== 200) {
        throw new Error("Something is wrong");
      }
      const data = await response.json();

      data.data.forEach((d) => {
        let randNum = Math.floor(Math.random() * 100) + 1;
        d.price = randNum;
        d.totalPrice = randNum;
        d.quantity = d.cart != null ? d.cart.quantity : 0
        // console.log(d);
      });
      // console.log("fetch all moviews", data.data);
      let totalQuantity = 0;
      data.data.forEach((d) => {
        totalQuantity += d.quantity
      })
      dispatch(cartActions.replaceCart({
        items: [...data.data],
        totalQuantity:totalQuantity
      }))
      // setIsLoading(false);
      // console.log(data);
    } catch (error) {
      // setError(error.message);
      // Code to handle the error
      console.log("An error occurred:", error.message);
    } finally {
      // Optional finally block
      // Code here will always execute regardless of whether an error occurred or not
    }

  },[])

  useEffect(() => {
    fetchDatas();
  },[fetchDatas]);
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
