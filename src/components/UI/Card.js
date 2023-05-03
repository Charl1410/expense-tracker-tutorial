import React from 'react';
import './Card.css';

//this is a reusable wrapper component 
const Card = (props) => {
    //this adds the card classes in card.css but also needs the css from the other file 
    const classes = 'card ' + props.className;
  return (
    // the value of the children prop will always be content between the opening and closing tags of the 
    //custom component (the opening and closing tag) meaning that it is the content in ExpenseItems 
    <div className={classes}>{props.children}</div>
  )
}

export default Card