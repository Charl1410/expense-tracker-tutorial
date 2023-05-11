import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
 
//this needs to stay in this file 
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

function App() {
  //setting the state of expense array to the dummy data
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  
  //this is triggered every time a new expense is added (onAddExpense is a function called in NewExpense form that passes in the new expense data as a param) 
  //function will add new expense onto the array of the previous state array 
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
   
  }
  
  return (
    <div>
  {/* NewExpense holds the expenseForm component and this addExpenseHanler pulls through the data submitted from the form  */}
      <NewExpense onAddExpense={addExpenseHandler}/>
    {/* Expenses holds each expenseItem prop which has the array data passed through from this component*/}
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
