import React from 'react'
import { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = () => {
    //storing the value of the title entered passing an objectinto useState 
   const [enteredTitle, setEnteredTitle] = useState("");
   const [enteredAmount, setEnteredAmount] = useState("");
   const [enteredDate, setEnteredDate] = useState("");

    //will be executed whenever the title changes
    //event is a deafualt object that the broswer will identify 
    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
    //   setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    //   });
        setEnteredAmount(event.target.value)
    };

    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            //will parse date string and convert into a date object 
            date: new Date(enteredDate)
        };
        console.log(expenseData)
    }
    

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm