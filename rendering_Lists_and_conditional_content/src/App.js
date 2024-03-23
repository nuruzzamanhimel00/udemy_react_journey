

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
    date: new Date('2022-04-02')
  },
  {
    id:'e14',
    title:'Car4',
    amount: 2024.402,
    date: new Date('2022-03-02')
  },
];
function App() {

  const [items, setItems] = useState(expensee_data)
  const [itemsTemp, setItemsTemp] = useState(expensee_data)
  const [expenseFilterYear, setExpenseFilterYear] = useState(2023)
  const expHandler = (expense) =>{
    // expensee_data.push(expense);
    setItems((prev)=>{
      return [expense,...prev]
    })
    expend_item_list_filter(expenseFilterYear, [expense,...items])
    // console.log('expHandler',expense);
  }
  const exYearHandler = (year)=>{
    setExpenseFilterYear(year)
    expend_item_list_filter(year, items)
   
}
const expend_item_list_filter  = (year, items_data) =>{
  console.log(items_data);
  let newExptData = [];
  items_data.forEach((item)=>{
    let yearSting = item.date.toLocaleDateString('en-US',{year: 'numeric',});
    if(yearSting === year){
      newExptData.push(item)
    }
  })
  if(newExptData.length > 0){

    setItemsTemp([...newExptData])
  }else{
    setItemsTemp([])
  }
}
  return (
    <div>
      <h1>Hello world !!</h1>
      <Expense items={itemsTemp} onExpHandler={expHandler} onExYearHandler={exYearHandler} />
     
    </div>
  );
}

export default App;
