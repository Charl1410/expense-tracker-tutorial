import React from 'react'
import "./ExpensesFilter.css";
import { useState } from 'react';



const ExpensesFilter = (props) => {
  //TODO create a filter section component that allows us to use a drop down and filter the year e.g. 2021
  const handleSelectChange = (event) => {
    //this function is made in expenses.js and pushed the data through and stores it in state there
    props.onSaveYearSelected(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* listen to changes on the dropdown and pass the function to pull through the selected year to this comp */}
        {/* The value prop sets the default value to the selected passed from the called component in expenses.js*/}
        <select onChange={handleSelectChange}>
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