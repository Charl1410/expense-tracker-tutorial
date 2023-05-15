import React, {useState} from 'react'
import './ChartBar.css'

// Defining props in the chart comp to pass through here
const ChartBar = (props) => {
    //setting CSS style 
    let barFillHeigh = '0%'

    if (props.maxValue > 0) {
        //this will give the persentage of how much the bar should be filled between 0 and 100 rounded to nearest int 
        
        barFillHeigh = Math.round((props.value / props.maxValue) * 100) + '%';
    }

  return (
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
            {/* this div will remeber how much to fill the chart bar 
            How much we fill this bar depends on the dataPoint.value in relation to the max value
            style wants js object */}
            <div className='chart-bar__fill' style ={{height : barFillHeigh}}></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>
  )
}

export default ChartBar