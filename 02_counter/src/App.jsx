import { useState } from 'react' //for Hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , chaiCounter] = useState(15) //Hooks

  // let counter = 15;
  const addValue = () => {
    chaiCounter(counter + 1)
  }

  const removeValue = () => {c
    chaiCounter(counter - 1)
  }
  return (
    <>
      <h2>Chai aur react</h2>
      <h3>Counter value : {counter}</h3>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
