

// import ExpenseItems from './components/Expenses/ExpenseItems'
import Expense from './components/Expenses/Expense.js'
import React, { useState } from 'react';
const expensee_data = [
  {
    id:'e1',
    title:'Car',
    amount: 202.02,
    date: new Date('2022-02-02')
  },
  {
    id:'e2',
    title:'Car1',
    amount: 201.02,
    date: new Date('2022-02-02')
  },
  {
    id:'e3',
    title:'Car3',
    amount: 2023.02,
    date: new Date('2022-02-02')
  },
  {
    id:'e14',
    title:'Car4',
    amount: 2024.402,
    date: new Date('2022-02-02')
  },
];
function App() {

  const [items, setItems] = useState(expensee_data)
  const expHandler = (expense) =>{
    // expensee_data.push(expense);
    setItems((prev)=>{
      return [...prev,expense]
    })
    console.log('expHandler',expense);
  }
  return (
    <div>
      <h1>Hello world !!</h1>
      <Expense items={items} onExpHandler={expHandler} />
      {/* <ExpenseItems
      title={expensee_data[0].title} 
      amount={expensee_data[0].amount} 
      date={expensee_data[0].date} 
      /> */}
    </div>
  );
}

export default App;
