import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import {counterActions} from '../store/counter.js'

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const isShow = useSelector(state => state.counter.showCounter);
  const isAuthonticated = useSelector(state => state.auth.isAuthonticated)

  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <>
      {
        isAuthonticated && 
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          {isShow &&   <div className={classes.value}>{counter}</div>}
        
          <div style={
            {
              marginBottom: '10px'
            }
          }>
            <button style={
              {marginRight: '10px'}
          } onClick={incrementHandler}>Increment</button>
          <button style={
              {marginRight: '10px'}
          } onClick={increaseHandler} >Incrase</button>
          <button style={
              {marginRight: '10px'}
          } onClick={decrementHandler} >decrement</button>
          </div>
          <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
      }
    </>
    
  );
};

export default Counter;
