import Card from '../UI/Card';
import classes from './ProductItem.module.css';
//redux
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice.js'
import { uiActions } from '../../store/ui-slice.js'
//custom hook
import useHttp from '../../hook/user-http.js'

const ProductItem = (props) => {
  const dispatch = useDispatch();
  //custom hook
  const { makeRequest: addToCartRquest} = useHttp();

  const { title, price, description, itemId } = props;
  
  const applyData = async (response) => {
    if (response.status !== 200) {
      dispatch(uiActions.uiNotification({
        status: 'error',
        message: 'Something is wrong!!',
        isNotify:true
      }));
      return;
    }
    const data = await response.json();
    console.log('data',data)
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

  }
  const addToCartHandler = async () => {
    let quantity = 1;
    
    dispatch(uiActions.uiNotification({
      status: 'pending',
      message: 'Get Request',
      isNotify:true
    }));
   addToCartRquest({
        url: "http://127.0.0.1:8000/api/add-to-cart",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          post_id: itemId,
          quantity: quantity
        },
      }, applyData)

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
