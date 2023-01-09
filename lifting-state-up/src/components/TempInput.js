import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

const TempInput = (props) => {
   
    return <div>
        <h3>Enter Any Temprature in {scaleNames[props.scale]} :: </h3>
      <input value={props.temperature} onChange={(e)=>{
          props.onTemperatureChange(e.target.value);
          props.onScaleChange(props.scale);
      }} />

    </div>;
}


export default TempInput;