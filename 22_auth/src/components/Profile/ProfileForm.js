import React,{useRef, useState, useContext} from 'react'
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context.js'

const ProfileForm = () => {
  const newPasswordInputRef = useRef('');
  const authCtx = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    let password = newPasswordInputRef.current.value
    console.log('password',password, authCtx.token)
      await fetch('http://127.0.0.1:8000/api/rest-password', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authCtx.token}`,
        },
        body:JSON.stringify({
          password:password
        }),
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
      if (data !== undefined) {
        alert(data.message)
        authCtx.login(data.access_token)
        localStorage.setItem('token', data.access_token)
      }
      
      console.log('then datga', data)
    });
  
  }

  const resetInput = () => {
    newPasswordInputRef.current.value = '';
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password {isLoading && '(Loading...)'}</button>
      </div>
    </form>
  );
}

export default ProfileForm;
