import ProductItem from './ProductItem';
import classes from './Products.module.css';
// import { v4 as uuidv4 } from 'uuid';
//redux 
import { useSelector } from 'react-redux'



const Products = (props) => {
  const cartItems = useSelector(state => state.cart.products)

  let productItems = cartItems.map((product) => (
    <ProductItem
    {...product}
    key={product.id}/>
  ))
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItems}
      </ul>
    </section>
  );
};

export default Products;
