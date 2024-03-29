import React, {useState, useEffect} from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsTuch, setEnteredNameIsTuch] = useState(false);
  const [formIsValide, setFormIsValide] = useState(true);

  const enterNameIsValied = enteredName === '' && enteredNameIsTuch;

  useEffect(() => {
    if (enteredName === '') {
      setFormIsValide(false)
    } else {
      setFormIsValide(true)
    }
  }, [enteredName])

  const enterNameInputHandler = (event) => {
    setEnteredNameIsTuch(true)
    if(event.target.value.trim() === '') {
      setEnteredName('');
      return;
    }
    setEnteredName(event.target.value);
  
    
  }
  const enterNameBlurHandlr = (event) => {
    setEnteredNameIsTuch(true);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(enterNameIsValied, enteredName === '' , enteredName === null );
    if (enteredName === '') {
      console.log('if')

      setEnteredNameIsTuch(true)
      return; 
    }
    setEnteredNameIsTuch(false)
    setEnteredName('');
    // console.log(enteredName);
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
        <button disabled={!formIsValide}
        className={!formIsValide ? 'disable-btn' : ''}
        >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
