import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => {
    const handler = () => {
      console.log('hello', who)
    }
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello('world')}>Worlds</button>
      <button onClick={hello('react')}>React</button>
      <button onClick={hello('function')}>Function</button>
    </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

