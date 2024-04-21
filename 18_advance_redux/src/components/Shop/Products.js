import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { v4 as uuidv4 } from 'uuid';

const DUMMY_PRODUCTS = [
  { id: uuidv4 (), price: 6, title: 'My Book', description: 'A book!'+uuidv4 ()
  +uuidv4 () ,quantity:1},
  { id: uuidv4 (), price: 5, title: 'My Mobile', description: 'A mobile!'+uuidv4 ()
  +uuidv4 () ,quantity:1},
];

const Products = (props) => {
  let productItems = DUMMY_PRODUCTS.map((product) => (
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
