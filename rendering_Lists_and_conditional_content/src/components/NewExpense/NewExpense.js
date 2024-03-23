import React, {useState} from 'react'
import ExpenseInput from './ExpenseInput.js'
import './NewExpense.css'
import AddExpence from './AddExpence.js'

const NewExpense = (props) => {
    const [addExpFlug, setAddExpFlug] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.newExpenseHandler(expenseData);
        // console.log('expenseData',expenseData);
    }
    const addExpFlugHandler = (flug) =>{
        setAddExpFlug(flug)
    }
    let addExpeCom = ''
    if(addExpFlug){
        addExpeCom = <ExpenseInput onSaveExpenseData={saveExpenseDataHandler}  
        onAddExpFlug={addExpFlugHandler}/>
    }else {
        addExpeCom = <AddExpence onAddExpFlug={addExpFlugHandler} />
    }
    return (
        <div className='newexpense_main'> 
            {addExpeCom}
            
        </div>
    );
}

export default NewExpense;