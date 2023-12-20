import './ExpenseItems.css';
const ExpenseItems = (props) => {
    const dateSting = props.date.toLocaleDateString('en-US');
    const titleString = props.title;
    const amountString = props.amount;
    return (
        <div className='card'> 
            <div className="expenseitem_main">
                <div>{dateSting}</div>
                <div className='expenseitem_description'>
                    <div>{titleString}</div>
                    <div className='price'>${amountString}</div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseItems;