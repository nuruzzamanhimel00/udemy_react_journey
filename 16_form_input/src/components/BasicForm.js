import React from 'react'
import useFormInput from '../hook/form-input.js'
const BasicForm = (props) => { 
  const {       
    getValue: enterName,
    isValidCheck: isValidCheckForName,
    enterInputHandler: enterInputNameHandler,
    enterIsTuchHandler: enterIsTuchNameHandler,
    reset: resetName
  } = useFormInput((value) => value.trim() !== '');

  const {       
    getValue: enterLastName,
    isValidCheck: isValidCheckForLastName,
    enterInputHandler: enterInputLastNameHandler,
    enterIsTuchHandler: enterIsTuchLastNameHandler,
    reset: resetLastName
  } = useFormInput((value) => value.trim() !== '');

  const {       
    getValue: enterEmail,
    isValidCheck: isValidCheckForEmail,
    enterInputHandler: enterInputEmailHandler,
    enterIsTuchHandler: enterIsTuchEmailHandler,
    reset: resetEmail
  } = useFormInput((value) => value.trim().includes('@'));

  console.log(isValidCheckForName , isValidCheckForLastName , isValidCheckForEmail)
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(isValidCheckForName , isValidCheckForLastName , isValidCheckForEmail)
    if (enterLastName === '' || enterLastName === '' || !enterEmail.includes('@')) {
      alert('filed is required!!')
      return;
    }
  
    resetName();
    resetLastName();
    resetEmail();
    alert('Submit COmpleted !!')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'
            style={
              {
              color: !isValidCheckForName ? 'red' : 'green'
            }
          }
          >First Name</label>
          <input type='text' id='name' onInput={enterInputNameHandler}
            onBlur={enterIsTuchNameHandler}
            style={
              {
                border: !isValidCheckForName ? '1px solid red' : '1px solid green',
                backgroundColor: !isValidCheckForName ? 'salmon' : 'transparent'
              }
            
            }
            value={enterName}
          />
          {!isValidCheckForName && <p style={{color: 'red'}} >Name field cannot be empty</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'
            style={
              {
              color: !isValidCheckForLastName ? 'red' : 'green'
            }
          }
          >Last Name</label>
          <input type='text' id='name'
            
            onInput={enterInputLastNameHandler}
            onBlur={enterIsTuchLastNameHandler}
            style={
              {
                border: !isValidCheckForLastName ? '1px solid red' : '1px solid green',
                backgroundColor: !isValidCheckForLastName ? 'salmon' : 'transparent'
              }
            
            }
            value={enterLastName}
        
          />
            {!isValidCheckForLastName && <p style={{color: 'red'}} >Name field cannot be empty</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'
          style={
            {
            color: !isValidCheckForEmail ? 'red' : 'green'
          }
        }
        >E-Mail Address</label>
        <input type='text' id='name'
        
        onInput={enterInputEmailHandler}
        onBlur={enterIsTuchEmailHandler}
        style={
          {
            border: !isValidCheckForEmail ? '1px solid red' : '1px solid green',
            backgroundColor: !isValidCheckForEmail ? 'salmon' : 'transparent'
          }
        
        }
        value={enterEmail}
        />
          {!isValidCheckForEmail && <p style={{color: 'red'}} >Input field must be email</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
