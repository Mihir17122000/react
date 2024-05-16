import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState (15)

  //let counter = 15
  const addvalue = () => {
    counter = counter + 1 
    setCounter(counter)
    console.log("clicked", counter);
  }

  const removeValue = () => {
    
    counter = counter - 1 
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addvalue} >Add Value {counter}</button>
      <br>
      
      </br>
      <button onClick={removeValue} >remove Value{counter}</button>
      <p> footer {counter}</p>
    </>
  )
}

export default App
