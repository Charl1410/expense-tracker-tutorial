import React from "react";
import { useState } from "react";

import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  //state to hold the value of the card expense and it can be updated by clicking the button 
  const [title, setTitle] = useState(props.title);

  const handleClick = () => {
    setTitle('updated!');
  }

  return (
    //Cannot put components within components unless using props.children 
    <Card className="expense-item">
      {/* we are prop drilling here because data is being passed from app.js to this file and then
      onto ExpenseDate.js*/}
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
