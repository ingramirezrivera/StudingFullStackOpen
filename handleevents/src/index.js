import React, { useState } from "react";
import ReactDOM from "react-dom";

const Value = ({value}) => <div>{value}</div>

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick}>Reset to Zero</button>
  )
}

const App = () => {
  const [value, setValue] = useState(10)
  const handleClick = () => {
    console.log("has been clicked")
    setValue(0)
  }

  return (
    <div>
      <Value value={value}/>
      <Button onClick={handleClick}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
