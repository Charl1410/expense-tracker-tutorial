import React from 'react'
import Chart from '../Chart/Chart'

//expect filtered expenses to come through to this function as a prop 
//go through all expeses for year and sum expenses for different months and assign them to data points 

const ExpensesChart = (props) => {

    const chartDataPoints = [
      { label: "Jan", value: 0 },
      { label: "Feb", value: 0 },
      { label: "Mar", value: 0 },
      { label: "Apr", value: 0 },
      { label: "May", value: 0 },
      { label: "Jun", value: 0 },
      { label: "Jul", value: 0 },
      { label: "Aug", value: 0 },
      { label: "Sep", value: 0 },
      { label: "Oct", value: 0 },
      { label: "Nov", value: 0 },
      { label: "Dec", value: 0 }
    ];

    //get list of expenses
    //for loop to loop through all expenses from props, look and get every month and update every datapoint 
    //expenses prop passed from expenses.js when calling the ExpensesChart
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); //starting at 0 (Jan is 0)
        //changes the value of the data points 
        chartDataPoints[expenseMonth].value += expense.amount;
    }
  return (
    // dataPoints is being mapped in Chart.js
    <Chart dataPoints={chartDataPoints} />
  )
}

export default ExpensesChart