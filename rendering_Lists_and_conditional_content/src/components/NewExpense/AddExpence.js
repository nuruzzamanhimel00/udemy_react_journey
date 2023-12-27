import './AddExpence.css';

const AddExpence = (props) =>{
    const addExpEnableHandler = () =>{
        props.onAddExpFlug(true)
    }
    return (
        <>
            <div className="add_exp_main">
                <button onClick={addExpEnableHandler}>Add Expense</button>
            </div>
        </>
    );
}

export default AddExpence;