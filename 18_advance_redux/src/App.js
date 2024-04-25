import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect, useCallback } from 'react'
import Notification from './components/UI/notification.js'
//redux
import { useDispatch } from 'react-redux'
import { cartActions } from './store/cart-slice.js'
import { uiActions } from './store/ui-slice.js'



function App() {
  const dispatch = useDispatch();
  const fetchDatas = useCallback(async () => {
    try {
    
        dispatch(uiActions.uiNotification({
          status: 'pending',
          message: 'Fetching Data',
          isNotify:true
        }));
      
      
      const response = await fetch("http://127.0.0.1:8000/api/get-all-post");
      const cartsResponse = await fetch("http://127.0.0.1:8000/api/fetch-carts");
      // console.log(response);
      if (response.status !== 200 || cartsResponse.status !== 200) {
        throw new Error("Something is wrong");
      }
      const data = await response.json();
      const cartData = await cartsResponse.json();

      
        dispatch(uiActions.uiNotification({
          status: 'success',
          message: 'Completed...',
          isNotify:true
        }));
    
      

      //fetch post
      data.data.forEach((d) => {
        let randNum = Math.floor(Math.random() * 100) + 1;
        d.itemId = d.id;
        d.price = randNum;
        d.quantity = d.cart != null ? d.cart.quantity : 0
        d.totalPrice = randNum;
        d.name = d.title
        
        // console.log(d);
      });

      let products = [...data.data]
      let totalQuantity = 0;
      
      //fetch cart
      cartData.data.forEach((d) => {
        let findData = data.data.find((item) => item.id === d.id)
        if (findData) {
          d.itemId = d.post !== null ? d.post.id: null
          d.name = d.post !== null ? d.post.title: 'no title';
          d.price= findData.price
          d.totalPrice = findData.price * d.quantity;
          totalQuantity += d.quantity
        }
      })

      
      dispatch(cartActions.replaceCart({
        items: [...cartData.data],
        totalQuantity: totalQuantity,
        products:products
      }))
  
    } catch (error) {
      // setError(error.message);
      // Code to handle the error
      dispatch(uiActions.uiNotification({
        status: 'error',
        message: 'Something is wrong!!',
        isNotify:true
      }));

      // console.log("An error occurred:", error.message);
    } finally {
      setTimeout(() => {
        dispatch(uiActions.uiNotification({
          status: '',
          message: '',
          isNotify:false
        }));
      },4000)
    }

  },[])

  useEffect(() => {
    fetchDatas();
  },[fetchDatas]);
  return (
    <>
    <Notification />
    <Layout>
      <Cart />
      <Products />
    </Layout>
    </>
  );
}

export default App;
