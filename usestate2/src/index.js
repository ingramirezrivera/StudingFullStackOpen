import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [clicks, setClicks] = useState({
    left:0, right:0
  })
  console.log("New State...", clicks, setClicks)
  
  const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})
  const handleRightClick = () => setClicks({...clicks, right: clicks.right +1 })

  return (  
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        rigth
      </button>
      {clicks.right}
    </div>
    
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

