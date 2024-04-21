import classes from './CartItem.module.css';

//redux
import { useDispatch } from 'react-redux'
import {cartActions} from '../../store/cart-slice.js'

const CartItem = (props) => {
  const { name, quantity, totalPrice, price } = props.item;
  const dispatch = useDispatch();
  const incrementCartHandler = () => {
    console.log({
      ...props.item
    })
    dispatch(cartActions.addItemToCart({
      ...props.item,id:props.item.itemId,title:props.item.name
    }))
  }

  const removeCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.item.itemId))
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
