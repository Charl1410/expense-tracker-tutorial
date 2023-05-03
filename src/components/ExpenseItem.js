import React from "react";
import './ExpenseItems.css'
import ExpenseDate from "./ExpenseDate";
import Card from './Card'

const ExpenseItem = (props) => {
 

  return (
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
