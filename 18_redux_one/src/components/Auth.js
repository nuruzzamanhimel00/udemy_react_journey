import classes from './Auth.module.css';

import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {authActions} from '../store/auth'

const Auth = () => {
  const dispatch = useDispatch(); 
  const [credential, setCredential] = useState({
    email: '',
    password:''
  })
  const emailHandler = (e) => {
    let email = e.target.value;
    setCredential((prev) => ({...prev, email: email}))
  }
  const passwordHandler = (e) => {
    let password = e.target.value;
    setCredential((prev) => ({...prev, password: password}))
  }
  const formSubmitHander = (e) => {
    e.preventDefault();
    let credentialData = { ...credential }
    let error = false
    for (let key in credentialData) {
      if (credentialData.hasOwnProperty(key)) {
        if (credentialData[key] === '') {
          alert('Please enter ' + key);
          error=true
          return;
        }
        // console.log(key + ': ' + credentialData[key]);
      }
    }
    if (!error) {
      dispatch(authActions.login())
      setCredential({email: '', password: ''})
      alert('Login Successfull')
    } else {
      alert('Login Fail')
    }
    console.log(credentialData)
  }
  return (
    <>
      <main className={classes.auth}>
          <section>
            <form onSubmit={formSubmitHander}>
              <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' onInput={emailHandler} />
              </div>
              <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' onInput={passwordHandler} />
              </div>
              <button>Login</button>
            </form>
          </section>
        </main>
      
    </>
    
  );
};

export default Auth;
