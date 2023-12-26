import React, {useState} from 'react';
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate.js'
import Card from '../UI/Card.js'
import NewExpense from '../NewExpense/NewExpense.js'
const ExpenseItems = (props) => {
    const [titleString, setTitleString] = useState(props.title);
    // const titleString = props.title;
    const amountString = props.amount;

    const testClickHandler = () =>{
        setTitleString('updated title- '+Math.random());
        console.log('clicked');
    }
    return (
        <div className='main'> 
            <Card className="card">
                <NewExpense />
                <div className="expenseitem_main">
                    {/* <div>{dateSting}</div> */}
                    <ExpenseDate date={props.date} />
                    {/* <div className='expenseitem_date'>
                        <div>{monthSting}</div>
                        <div>{yearSting}</div>
                        <div>{daySting}</div>
                    </div> */}
                    <div className='expenseitem_description'>
                        <div>{titleString}</div>
                        <div className='price'>${amountString}</div>
                        <div>
                            <a href="#" onClick={testClickHandler} >CLick me</a>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default ExpenseItems;