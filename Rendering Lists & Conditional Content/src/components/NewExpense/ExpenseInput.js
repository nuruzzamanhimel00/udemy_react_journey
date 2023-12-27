import './ExpenseInput.css'
import React,{useState} from 'react'
const ExpenseInput = (props)=>{
    // const [title, setTitle] = useState('')
    // const [amount, setAmount] = useState('')
    // const [date, setDate] = useState('')

    const [inputData, setInputData] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const changeTitleHandler = (event)=>{
        setInputData((prevState)=>{
            return {
                ...prevState,
                title: event.target.value
            }
        })
        // setTitle(event.target.value)
    }
    const changeAmountHandler = (event)=>{
        setInputData((prevState)=>{
            return {
                ...prevState,
                amount: event.target.value
            }
        })
        // setAmount(event.target.value)
    }
    const changeDateHandler = (event)=>{
        setInputData((prevState)=>{
            return {
                ...prevState,
                date: event.target.value
            }
        })
        // setDate(event.target.value)
    }
    const submitFormHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title: inputData.title,
            amount: inputData.amount,
            date: new Date(inputData.date)
        }
        props.onSaveExpenseData(expenseData)
        setInputData({title: '', amount: '', date: ''})
        // console.log(expenseData)
    }
    return (
        <form className="expenseInputForm" onSubmit={submitFormHandler}> 
                <div>
                <label for="title">Title:</label> <br/>
                <input type="text" id="title" name="title"
                value={inputData.title}
                onChange={changeTitleHandler} />
                </div>
              
            <div>
            <label for="amount">Amount:</label> <br/>
                <input type="number" id="amount" name="amount"
                value={inputData.amount}
                onChange={changeAmountHandler} />
            </div>
               <div> 
               <label for="date">Date:</label> <br/>
                <input type="date" id="date" name="date"
                    value={inputData.date}
                onChange={changeDateHandler} />
               </div>
               <div> 
               <button>Add Expense</button>
               </div>
            </form>
    );
}

export default ExpenseInput;