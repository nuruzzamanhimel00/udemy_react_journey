import React from "react";
import ExpenseItems from './ExpenseItems.js'
const Expense = (props) =>{
    const expenseHandler = (expense) =>{
        props.onExpHandler(expense);
        // console.log('expense handler',expense)
    }
    const expenseYearHandler = (year)=>{
        props.onExYearHandler(year)
        // console.log('expenseYearHandler',year)
    }
    return (
        <>
        
        <ExpenseItems
        onExpenseYearHandler={expenseYearHandler}
        onExpense={expenseHandler}
        items={props.items}
        />
     
        </>
       
    )
}

export default Expense;