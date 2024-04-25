import Card from '../UI/Card';
import classes from './ProductItem.module.css';
//redux
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice.js'
import { uiActions } from '../../store/ui-slice.js'

const ProductItem = (props) => {
  const dispatch = useDispatch();



  const { title, price, description, id , itemId} = props;
  const addToCartHandler = async () => {
    let quantity = 1;
    
    dispatch(uiActions.uiNotification({
      status: 'pending',
      message: 'Get Request',
      isNotify:true
    }));
    try {
      const response = await fetch("http://127.0.0.1:8000/api/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          post_id: itemId,
          quantity: quantity
        }),
      });
      // console.log(response);
      if (response.status !== 200) {
        throw new Error("Something is wrong");
      }
      const data = await response.json();
      if(data.status === 'success') {
        dispatch(cartActions.addItemToCart({
          ...props
        }))
        
        dispatch(uiActions.uiNotification({
          status: 'success',
          message: 'Add To Cart',
          isNotify:true
        }));
      }
    
      // setIsLoading(false);
      console.log(data);
    } catch (error) {
      // setError(error.message);
      // Code to handle the error
      dispatch(uiActions.uiNotification({
        status: 'error',
        message: 'Something is wrong!!',
        isNotify:true
      }));
      console.log("An error occurred:", error.message);
    } finally {
      setTimeout(() => {
        dispatch(uiActions.uiNotification({
          status: '',
          message: '',
          isNotify:false
        }));
      },4000)
    }
  
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
