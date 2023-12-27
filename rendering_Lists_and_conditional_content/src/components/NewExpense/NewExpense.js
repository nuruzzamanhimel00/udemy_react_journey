import React from 'react'
import ExpenseInput from './ExpenseInput.js'
import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.newExpenseHandler(expenseData);
        // console.log('expenseData',expenseData);
    }
    return (
        <div className='newexpense_main'> 
            <ExpenseInput onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;