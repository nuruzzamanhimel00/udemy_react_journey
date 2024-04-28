import { useState, useRef,useContext } from 'react';

import classes from './AuthForm.module.css';
import { Prompt, useHistory } from 'react-router-dom';
//context
import AuthContext from '../../store/auth-context.js'

const AuthForm = () => {
  const [isVisite, setIsVisite] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();
  const authCtx = useContext(AuthContext)

  const emailRef = useRef('')
  const passwordRef = useRef('')

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    let email = emailRef.current.value
    let password = passwordRef.current.value
    let url  = ''
    let body  = ''
    if (isLogin) {
       url = "http://127.0.0.1:8000/api/login"
       body = JSON.stringify({
        email: email,
        password: password,
      })
    } else {
      url = "http://127.0.0.1:8000/api/register"
      body = JSON.stringify({
        name: email,
        email: email,
        password: password,
      })
    }

       await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
    }).then((res) => {
      if (res.status === 200) {
        setIsLoading(false);
        resetInput()
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
      if (isLogin && data !== undefined) {
    
        let time = new Date().getTime() + ((+data.lifetime * 60) * 1000)
        let expireTime = new Date(time)
        // console.log('time', new Date().getTime(), expireTime.toISOString())
        authCtx.login(data.access_token,  expireTime.toISOString())
        localStorage.setItem('token', data.access_token)
        history.push('/')
      } 
    
      console.log('datga', data)
    }).catch((err) => {
      console.log('Error:'+err)
    });
    
    
  }

  const resetInput = () => {
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <>
      <Prompt
        when={isVisite}
        message="Are you sure you want to leave?"
      />
    <section className={classes.auth} onFocus={() => setIsVisite(false)}>
      <h1>{isLogin ? 'Login' : 'Sign Up'} {isLoading ? 'Loading..' : ''} </h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={passwordRef} required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
      </section>
  
    </>
  );
};

export default AuthForm;
