import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({ value }) => <div>{value}</div>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const  App = () => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => {
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value}/>
      <Button handleClick={setToValue(1000)} text="Thousand" />
      <Button handleClick={setToValue(0)} text="Reset"/>
      <Button handleClick={setToValue(value + 1)} text="+1"/>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

