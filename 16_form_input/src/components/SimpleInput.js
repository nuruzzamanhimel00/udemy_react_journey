import React from 'react'
import useInput from   '../hook/user-input';
const SimpleInput = (props) => {

  const { value: enteredName,  setIsTuch,  enterNameIsValied, enterNameInputHandler, enterNameBlurHandlr, formIsValide, reset: resetValue } = useInput(value => value.trim() === '');

  const { value: enteredEmail,  setIsTuch:setIsEmailTuch,  enterNameIsValied:enterEmailIsValied, enterNameInputHandler: enterEmailInputHandler, enterNameBlurHandlr: enterEmailBlurHandlr, formIsValide:formIsEmailValide, reset: resetEmailValue } = useInput(value => value.trim() === '' || !value.includes('@'));

  

  const submitHandler = (event) => {
    event.preventDefault();
    
    if (enteredName === '') {
      console.log('if')

      setIsTuch(true)
      return; 
    }
    if (enteredEmail === '' || !enteredEmail.includes('@')) {
      console.log('if enteredEmail')
      setIsEmailTuch(true)
      return;
    }
    resetValue();
    resetEmailValue();
    // setEnteredNameIsTuch(false)
    // setEnteredName('');
  
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'
          style={ 
            {
              color: !enterNameIsValied ? 'green' : 'red'
          }
        }
        >Your Name</label>
        <input type='text' id='name' value={enteredName}
          onBlur={enterNameBlurHandlr}
          onInput={enterNameInputHandler} style={
          {
            border: !enterNameIsValied ? '1px solid green' : '1px solid red'
          }
        } />
        {enterNameIsValied && <p style={{color: 'red'}} >Name field cannot be empty</p> }
      </div>

      <div className='form-control'>
        <label htmlFor='email'
          style={ 
            {
              color: !enterEmailIsValied ? 'green' : 'red'
          }
        }
        >Your Email</label>
        <input type='email' id='email' value={enteredEmail}
          onBlur={enterEmailBlurHandlr}
          onInput={enterEmailInputHandler} style={
          {
            border: !enterEmailIsValied ? '1px solid green' : '1px solid red'
          }
        } />
        {enterEmailIsValied && <p style={{color: 'red'}} >Email field validation fail</p> }
      </div>
      <div className="form-actions">
        <button disabled={enterEmailIsValied}
        className={enterEmailIsValied ? 'disable-btn' : ''}
        >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
