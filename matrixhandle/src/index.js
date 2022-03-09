import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return(
    <p>You have to use the buttons to see the history</p>
    )
  }
  
  return (
    <p>Button press History: {allClicks.join(' ')} </p> 
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [left , setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])
  
  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setLeft(left + 1)
    console.log("AllClicks...", allClicks)
  }
  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setRight(right + 1)
    console.log("AllClicks...", allClicks)
  }
  
  return (
    <div>
      {left}
        <Button onClick={handleLeftClick} text="Left" />
        <Button onClick={handleRightClick} text="Right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


