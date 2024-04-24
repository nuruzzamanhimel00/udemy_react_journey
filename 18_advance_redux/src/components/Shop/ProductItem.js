import Card from '../UI/Card';
import classes from './ProductItem.module.css';
//redux
import { useDispatch } from 'react-redux'
import {cartActions} from '../../store/cart-slice.js'

const ProductItem = (props) => {
  const dispatch = useDispatch();



  const { title, price, description, id } = props;
  const addToCartHandler = async () => {
    let quantity = 1;
    try {
      const response = await fetch("http://127.0.0.1:8000/api/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          post_id: id,
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
