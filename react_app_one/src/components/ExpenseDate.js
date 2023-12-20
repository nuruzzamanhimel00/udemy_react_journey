import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const monthSting = props.date.toLocaleDateString('en-US',{month: 'long',});
    const yearSting = props.date.toLocaleDateString('en-US',{year: 'numeric',});
    const daySting = props.date.toLocaleDateString('en-US',{day: 'numeric',});
    return (
        <div className='expenseitem_date'>
        <div>{monthSting}</div>
        <div>{yearSting}</div>
        <div>{daySting}</div>
    </div>
    );
}

export default ExpenseDate;