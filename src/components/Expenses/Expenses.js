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
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onSaveYearSelected={saveYearHandler} />
      {/* expense represents each item which is an object in the array then we define the key val pairs in the array  */}
      {props.items.map(expense => (
       <ExpenseItem 
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