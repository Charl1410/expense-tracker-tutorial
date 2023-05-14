import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from '../Expenses/ExpensesFilter'
import ExpensesList from './ExpensesList';

//this holds the selected year passed through from expensesFilter
//sets state to the year selected in the filter component
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const saveYearHandler = (yearSelected) => {
    setFilteredYear(yearSelected);
  }

//create a function that take the whole array and filters the items based on the filteredYear 
//this will return true if the year matches or false if it does not 
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSaveYearSelected={saveYearHandler}
        />
        {/* filtered expenses need to be passed through here to the component */}
      <ExpensesList items={filteredExpenses} />        
      </Card>
    </>
  );
}

export default Expenses;