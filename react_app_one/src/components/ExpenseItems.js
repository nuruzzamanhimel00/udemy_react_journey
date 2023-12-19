import './ExpenseItems.css';
const ExpenseItems = () => {
    const dateSting = new Date('2022-02-02').toLocaleDateString('en-US');
    const titleString = "Car test";
    const amountString = 202.02;
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