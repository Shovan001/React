import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5);


 // let counter = 5;
  
  const addValue = () => {
    setCounter(counter + 1);
  }

  const substractValue = () => {
    counter -= 1;
    setCounter(counter);
    // setCounter(counter - 1);
  }

  return (
    <>
      
      <h1>Counter is Starting</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Increase value</button>
      <br />
      <button onClick={substractValue}>Decrease value</button>
      <br />

    </>
  )
}

export default App
