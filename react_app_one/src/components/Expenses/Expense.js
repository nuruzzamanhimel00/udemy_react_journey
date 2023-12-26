import React from "react";
import ExpenseItems from './ExpenseItems.js'
const Expense = (props) =>{
    const expenseHandler = (expense) =>{
        props.onExpHandler(expense);
        // console.log('expense handler',expense)
    }
    return (
        <>
         
        <ExpenseItems
        onExpense={expenseHandler}
        title={props.items[0].title} 
        amount={props.items[0].amount} 
        date={props.items[0].date} 
        />
        </>
       
    )
}

export default Expense;