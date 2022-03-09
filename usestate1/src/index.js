import React from 'react';
import ReactDOM from 'react-dom';
import { useState} from 'react';

const Display = ({ counter }) => <div>{counter}</div>
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>


const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter( counter + 1 )
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter( counter - 1 )

  return (
    <React.Fragment>
      <Display counter={counter} />
      <Button 
        handleClick={increaseByOne}
        text='plus'
      />
      <Button 
        handleClick={setToZero}
        text='reset'
      />
      <Button 
        handleClick={decreaseByOne}
        text='minus'
      />
    </React.Fragment>
  ) 
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


