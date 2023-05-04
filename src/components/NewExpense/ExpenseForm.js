import React from 'react'
import { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = () => {
    //storing the value of the title entered passing an objectinto useState 
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    //will be executed whenever the title changes
    //event is a deafualt object that the broswer will identify 
    const titleChangeHandler = (event) => {
        setUserInput({
            //this copying in the state data set as default in the useState to make sure the other values are not lost 
            //then overwrites enteredTitle 
            ...userInput,
            enteredTitle: event.target.value,
        })  
    }
    const amountChangeHandler = (event) => {
      setUserInput({
        //this copying in the state data set as default in the useState to make sure the other values are not lost
        //then overwrites enteredTitle
        ...userInput,
        enteredAmount: event.target.value,
      });
    };
    const dateChangeHandler = (event) => {
      setUserInput({
        //this copying in the state data set as default in the useState to make sure the other values are not lost
        //then overwrites enteredTitle
        ...userInput,
        enteredDate: event.target.value,
      });
    };
    
    

  return (
    <form>
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