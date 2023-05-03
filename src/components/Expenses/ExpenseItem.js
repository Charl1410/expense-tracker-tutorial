import React from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
 

  return (
    //Cannot put components within components unless using props.children 
    <Card className="expense-item">
      {/* we are prop drilling here because data is being passed from app.js to this file and then
      onto ExpenseDate.js*/}
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
