import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {
  //storing the jsx content for output message if there is no conent for the selected year
  let expensesContent = <p>No expenses found.</p>;
  //checking if the filtered expenses length is greater than 0 and generating the content from the array if that is so
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    
}
    
  return (
    <ul className='expenses-list'>
        {props.items.map((expense) => (
      <ExpenseItem
        //  {/* expense represents each item which is an object in the array then we define the key val pairs in the array  */}
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
    </ul>
  )
}

export default ExpensesList