import React from 'react'

import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

//function to make the expense form 
const NewExpense = (props) => {
  //define function to pass into onSaveExpenseData which will
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //function will have expense data passed to it from the expense form component 
    //this is pulled through and a new id is added to it 
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData)
  }
  return (
    <div className='new-expense'>
      
      {/* this function is not being used here but can now be used in expense form to push data to here */}
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense