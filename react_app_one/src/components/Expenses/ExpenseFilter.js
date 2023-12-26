
import './ExpenseFilter.css'
const ExpenseFilter = (props) =>{
    return (
        <>
        <div className='expenseitem_date'> 
            <div>
                <h3>Select Years:</h3>
            </div>
            <div>
            <select name="cars">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
            </div>
        </div>
      </>
    );
   
}

export default ExpenseFilter;