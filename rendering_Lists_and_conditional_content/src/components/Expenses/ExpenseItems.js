// import React, {useState} from 'react';
import './ExpenseItems.css';
// import ExpenseDate from './ExpenseDate.js'
import Card from '../UI/Card.js'
import NewExpense from '../NewExpense/NewExpense.js'
import ExpenseFilter from './ExpenseFilter.js';
import ExpenseList from './ExpenseList.js';
import ExpenseChart from './ExpenseChart.js';
const ExpenseItems = (props) => {

    const newExpenseHandler = (data)=>{
        props.onExpense(data);
        // console.log('data',data);
    }
    const expenseYearItemHandler = (year)=>{
        props.onExpenseYearHandler(year);
        // console.log(year)
    }
    let expense_list_data = '<p> NO data found !! </p>'
    if(props.items.length > 0){
        expense_list_data =  props.items.map((item)=>(
            <ExpenseList 
            key={item.id}
            title={item.title} 
            amount={item.amount} 
            date={item.date} 
            />
        ))
    }
    return (
        <div className='main'> 
            <Card className="card">
                <NewExpense newExpenseHandler={newExpenseHandler} />
                <ExpenseChart expenses={props.items} />
                <ExpenseFilter onExpenseYearHandler={expenseYearItemHandler} />
                {
                    expense_list_data
                      
                    }
                
            </Card>
        </div>
    );
}

export default ExpenseItems;