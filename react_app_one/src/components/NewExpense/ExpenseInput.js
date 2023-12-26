import './ExpenseInput.css'
const ExpenseInput = ()=>{
    return (
        <form className="expenseInputForm"> 
                <div>
                <label for="title">Title:</label> <br/>
                <input type="text" id="title" name="title" />
                </div>
              
            <div>
            <label for="amount">Amount:</label> <br/>
                <input type="number" id="amount" name="amount" />
            </div>
               <div> 
               <label for="date">Date:</label> <br/>
                <input type="date" id="date" name="date" />
               </div>
               <div> 
               <button>Add Expense</button>
               </div>
            </form>
    );
}

export default ExpenseInput;