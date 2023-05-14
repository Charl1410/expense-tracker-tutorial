import React from "react";
// import { useState } from "react";

import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

//function to make the individual expense cards 
const ExpenseItem = (props) => {
  //state to hold the value of the card expense and it can be updated by clicking the button 

  return (
    //Cannot put components within components unless using props.children
    <li>
      <Card className="expense-item">
        {/* we are prop drilling here because data is being passed from app.js to this file and then
      onto ExpenseDate.js*/}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">£{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
