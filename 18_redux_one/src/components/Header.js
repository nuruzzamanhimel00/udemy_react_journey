import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux'
import {authActions} from '../store/auth.js'

const Header = () => {
  const isAuthonticated = useSelector(state => state.auth.isAuthonticated)
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout())
    
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {
        isAuthonticated && 
        <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
          
        </ul>
      </nav>
      }
      
    </header>
  );
};

export default Header;
