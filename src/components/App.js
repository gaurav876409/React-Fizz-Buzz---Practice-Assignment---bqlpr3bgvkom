import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    if(counter>1){
      setCounter(counter - 1)
    }
  }

  const counterClass = () => {
    if(counter%3 ===0 && counter%5 === 0){
      return 'fizzbuzz' 
    }else if(counter%3 === 0){
      return 'fizz'
    }else if(counter%5 === 0){
      return 'buzz'
    }else{
      return 'normal'
    }
  }
  
  return (
    <div id="main">
      <div id='counter' className={counterClass()}>{counter}</div>
      <div>
        <button id='increment' onClick={increment}>increments</button>
      </div>
      <div>
        <button id='decrement' onClick={decrement}>decrements</button>
      </div>
    </div>
  )
}


export default App;
