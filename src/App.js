import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  //this needs to stay in this file 
  const expenses = [
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

  //this will console log the data passed from newExpense 
  const addExpenseHandler = (expense) => {
    console.log('in App.js');
    console.log(expense)
  }
  
  return (
    <div>
  {/* NewExpense holds the expenseForm component */}
      <NewExpense onAddExpense={addExpenseHandler}/>
    {/* Expenses holds each expenseItem prop which has the data passed through from this component*/}
      <Expenses expenses={expenses} />

    </div>
  );
}

export default App;
