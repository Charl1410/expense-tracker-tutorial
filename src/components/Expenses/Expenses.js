import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from '../Expenses/ExpensesFilter'

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
        {/* expense represents each item which is an object in the array then we define the key val pairs in the array  */}
        {/* displaying the filtered expenses which takes the given array from the main array and has been filtered to the date */}
        {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        
      </Card>
    </>
  );
}

export default Expenses;