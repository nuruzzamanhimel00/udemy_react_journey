import React,{useContext, useState} from 'react'
import { Link , useHistory } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import AuthContext from '../../store/auth-context.js'


const MainNavigation = () => {
  const authCtx = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();
  const logoutClickHandler = async (event) => {
    event.preventDefault();
    await fetch('http://127.0.0.1:8000/api/logout', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authCtx.token}`,
      },
    
  }).then((res) => {
    if (res.status === 200) {
      setIsLoading(false);
  
      return res.json()
    } else {
      setIsLoading(false);
      res.json().then((data) => {
        // console.log('message',data.message)
        if (data && data.message) {
          alert(data.message)
        }
      })
      
    }
    
  }).then((data) => {
      authCtx.logout()
      
      history.push('/')
      // console.log('datga', data)
  });
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {
            !authCtx.isLoggedIn && 
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          }
          {
            authCtx.isLoggedIn && 
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          }
          
          {
            authCtx.isLoggedIn && 
            <li>
                <button onClick={logoutClickHandler}>Logout
                {isLoading && '(Loading...)'}
                </button>
          </li>
          }
        
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
