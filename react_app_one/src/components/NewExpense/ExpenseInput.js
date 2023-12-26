import './ExpenseInput.css'
import React,{useState} from 'react'
const ExpenseInput = ()=>{
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
    return (
        <form className="expenseInputForm"> 
                <div>
                <label for="title">Title:</label> <br/>
                <input type="text" id="title" name="title" onChange={changeTitleHandler} />
                </div>
              
            <div>
            <label for="amount">Amount:</label> <br/>
                <input type="number" id="amount" name="amount" onChange={changeAmountHandler} />
            </div>
               <div> 
               <label for="date">Date:</label> <br/>
                <input type="date" id="date" name="date" onChange={changeDateHandler} />
               </div>
               <div> 
               <button>Add Expense</button>
               </div>
            </form>
    );
}

export default ExpenseInput;