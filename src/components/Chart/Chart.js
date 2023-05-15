import React from 'react';
import ChartBar from './ChartBar'
import './ChartBar.css';

const Chart = (props) => {
  //pulling out just the values from the objects as only numbers can be passed to math.max
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  //spread pulls out all of the values from the array and add them as stand alone arguments (cannot use array it is one arg) 
  const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className='chart'>
      {/* we are defining props we will pass into the component and map  */}
      {props.dataPoints.map((dataPoint) => (
      <ChartBar 
      //this key is going to be unique as every chart bar is unique so can use as key 
      key={dataPoint.label}
      value={dataPoint.value}
      // not a value derived from the dataPoint data
       maxValue={totalMaximum} 
       label={dataPoint.lable}
       />
       ))}
    </div>
  )
}

export default Chart