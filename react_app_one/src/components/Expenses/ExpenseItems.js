// import React, {useState} from 'react';
import './ExpenseItems.css';
// import ExpenseDate from './ExpenseDate.js'
import Card from '../UI/Card.js'
import NewExpense from '../NewExpense/NewExpense.js'
import ExpenseFilter from './ExpenseFilter.js';
import ExpenseList from './ExpenseList.js';
const ExpenseItems = (props) => {
    // const [titleString, setTitleString] = useState(props.title);
    // // const titleString = props.title;
    // const amountString = props.amount;

    // const testClickHandler = () =>{
    //     setTitleString('updated title- '+Math.random());
    //     console.log('clicked');
    // }
    const newExpenseHandler = (data)=>{
        props.onExpense(data);
        // console.log('data',data);
    }
    return (
        <div className='main'> 
            <Card className="card">
                <NewExpense newExpenseHandler={newExpenseHandler} />
                <ExpenseFilter />
                {
                        props.items.map((item)=>(
                            <ExpenseList 
                            key={item.id}
                            title={item.title} 
                            amount={item.amount} 
                            date={item.date} 
                            />
                        ))
                    }
                {/* <div className="expenseitem_main">
               
                  
                    <ExpenseDate date={props.date} />
                  
                
                    <div className='expenseitem_description'>
                        <div>{titleString}</div>
                        <div className='price'>${amountString}</div>
                        <div>
                            <a href="#" onClick={testClickHandler} >CLick me</a>
                        </div>
                    </div>
                </div> */}
            </Card>
        </div>
    );
}

export default ExpenseItems;