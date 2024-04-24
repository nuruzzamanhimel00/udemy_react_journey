import classes from './CartItem.module.css';

//redux
import { useDispatch } from 'react-redux'
import {cartActions} from '../../store/cart-slice.js'

const CartItem = (props) => {
  const { name, quantity, totalPrice, price } = props.item;
  const dispatch = useDispatch();
  const incrementCartHandler = async() => {

    let quantity = 1;
    try {
      const response = await fetch("http://127.0.0.1:8000/api/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          post_id: props.item.id,
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
          ...props.item,id:props.item.id,title:props.item.name
        }))
      }
    
      // setIsLoading(false);
      console.log(data);
    } catch (error) {
      // setError(error.message);
      // Code to handle the error
      console.log("An error occurred:", error.message);
    } finally {
      // Optional finally block
      // Code here will always execute regardless of whether an error occurred or not
    }
    
  }

  const removeCartHandler = async () => {

    try {
      const response = await fetch("http://127.0.0.1:8000/api/remove-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          post_id: props.item.id,
          quantity: 1
        }),
      });
      // console.log(response);
      if (response.status !== 200) {
        throw new Error("Something is wrong");
      }
      const data = await response.json();
      if(data.status === 'success') {
      
        dispatch(cartActions.removeItemFromCart(props.item.id))
      }
    
      // setIsLoading(false);
      console.log(data);
    } catch (error) {
      // setError(error.message);
      // Code to handle the error
      console.log("An error occurred:", error.message);
    } finally {
      // Optional finally block
      // Code here will always execute regardless of whether an error occurred or not
    }

    // dispatch(cartActions.removeItemFromCart(props.item.itemId))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartHandler} >-</button>
          <button onClick={incrementCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
