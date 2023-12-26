import React from 'react'
import ExpenseInput from './ExpenseInput.js'
import './NewExpense.css'

const NewExpense = () => {
    return (
        <div className='newexpense_main'> 
            <ExpenseInput />
        </div>
    );
}

export default NewExpense;