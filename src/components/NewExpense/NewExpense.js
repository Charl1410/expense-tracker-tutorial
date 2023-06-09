import React, { useState } from 'react'

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
    //closes the form 
    stopEditing();
  }

  const [isEditing, setIsEditing] = useState(false)

  const startEditingHandler = () => {
    setIsEditing(true)
  }
  const stopEditing = () => {
    setIsEditing(false)
  }
  
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          stopEdit={stopEditing}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );


}

export default NewExpense