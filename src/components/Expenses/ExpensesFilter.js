import React from 'react'
import "./ExpensesFilter.css";


//TODO create a filter section component that allows us to use a drop down and filter the year e.g. 2021

//listen to changes on the dropdown 

//whenever the user selects a new year from the dropdown listen to this event, make sure the picked year is 
//forwarded through the expenses component 
//add the expense filter component into the Expense js file 
//Forward the picked year from the ExpenseFilter into the Expenses component 
//in the expenses component store the picked year into the state 



const ExpensesFilter = () => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;