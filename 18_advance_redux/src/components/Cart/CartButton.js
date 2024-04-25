import classes from './CartButton.module.css';
//redux
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartTotalQty = useSelector(state => state.cart.totalQuantity)


  const cartClickHandler = () => {
    dispatch(uiActions.uiToggle())
  }
  return (
    <button className={classes.button} onClick={cartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{ cartTotalQty}</span>
    </button>
  );
};

export default CartButton;
