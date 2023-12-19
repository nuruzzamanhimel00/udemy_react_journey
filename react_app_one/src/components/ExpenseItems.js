import './ExpenseItems.css';
const ExpenseItems = () => {
    return (
        <div className='card'> 
            <div className="expenseitem_main">
                <div>March 28, 2023</div>
                <div className='expenseitem_description'>
                    <div>Car test</div>
                    <div className='price'>$202.02</div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseItems;