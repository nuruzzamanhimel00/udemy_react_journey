import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate.js'
const ExpenseList = (props) =>{
    const [titleString, setTitleString] = useState(props.title);
    // const titleString = props.title;
    const amountString = props.amount;
    // const testClickHandler = () =>{
    //     setTitleString('updated title- '+Math.random());
    //     console.log('clicked');
    // }
    return (
        <div className="expenseitem_main">
               
                  
        <ExpenseDate date={props.date} />
      
    
        <div className='expenseitem_description'>
            <div>{titleString}</div>
            <div className='price'>${amountString}</div>
            {/* <div>
                <a href="#" onClick={testClickHandler} >CLick me</a>
            </div> */}
        </div>
    </div>
    );
}
export default ExpenseList;