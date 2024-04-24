import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
//redux
import {useSelector} from 'react-redux'

const Cart = (props) => {
  const isVisiabled = useSelector(state => state.ui.isVisiabled)
  const cartItems = useSelector(state => state.cart.items)

  let allCartItems = cartItems.map(item => (
    <CartItem
      key={item.id}
    item={{...item }}
  />
  ))
  return (
    <>
      {isVisiabled &&
        <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {allCartItems}
        </ul>
      </Card>
      }
    </>
  
  );
};

export default Cart;
