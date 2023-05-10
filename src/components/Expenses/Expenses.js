import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from '../Expenses/ExpensesFilter'

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const saveYearHandler = (yearSelected) => {
    setFilteredYear(yearSelected);


  }
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onSaveYearSelected={saveYearHandler} />

        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
      </Card>
    </>
  );
}

export default Expenses;