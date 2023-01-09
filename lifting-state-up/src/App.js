import './App.css';
import React,{useState  } from 'react';
import TempInput from './components/TempInput';
import BoilingVerdict from './components/BoilingVerdict';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
  return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


function App() {
  const [temp, settemp] = useState("");
  const [scale, setscale] = useState("c");
  const celsius = scale === 'f' ? tryConvert(temp, toCelsius) : temp;
  const fahrenheit = scale === 'c' ? tryConvert(temp, toFahrenheit) : temp;

  return (
    <div>
      <TempInput temperature={celsius} onTemperatureChange={settemp} onScaleChange={setscale} scale="c"/>
      <TempInput temperature={fahrenheit} onTemperatureChange={settemp} onScaleChange={setscale} scale="f" />
      <BoilingVerdict celsius={parseFloat(celsius)}/>
    </div>
  );
}

export default App;
