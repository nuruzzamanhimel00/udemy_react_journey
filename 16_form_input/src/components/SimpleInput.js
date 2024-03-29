import React from 'react'
import useInput from   '../hook/user-input';
const SimpleInput = (props) => {

  const { value: enteredName,  setIsTuch,  enterNameIsValied, enterNameInputHandler, enterNameBlurHandlr, formIsValide, reset: resetValue } = useInput();

  

  const submitHandler = (event) => {
    event.preventDefault();
    
    if (enteredName === '') {
      console.log('if')

      setIsTuch(true)
      return; 
    }
    resetValue();
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
      <div className="form-actions">
        <button disabled={enterNameIsValied}
        className={enterNameIsValied ? 'disable-btn' : ''}
        >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
