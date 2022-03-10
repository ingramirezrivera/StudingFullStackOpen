import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Value = ({ value }) => <div>{value}</div>

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick}>Reset to zero</button>
  )
}

const App = () => {
  const [value, setValue] = useState(10)

  const Hello = () => {
    const handle = () => setValue(0)
     return (
      handle
    )
  }

  return (
    <div>
      <Value value={value}/>
      <Button onClick={Hello()} />
    </div>
  )
}
  
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

