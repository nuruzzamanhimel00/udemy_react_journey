import React, {useState} from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [nameIsValidate, setNameIsValidate]= useState(true)

  const enterNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim().length === 0) {
      setNameIsValidate(false);
      return; 
    }
    setNameIsValidate(true);
    
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0) {
      setNameIsValidate(false);
      return; 
    }
    setNameIsValidate(true);
    setEnteredName('');
    console.log(enteredName);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'
          style={ 
            {
              color: nameIsValidate ? 'green' : 'red'
          }
        }
        >Your Name</label>
        <input type='text' id='name' value={enteredName}
      
          onChange={enterNameChangeHandler} style={
          {
            border: nameIsValidate ? '1px solid green' : '1px solid red'
          }
        } />
        {!nameIsValidate && <p style={{color: 'red'}} >Name field cannot be empty</p> }
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
