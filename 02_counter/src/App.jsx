import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(0)

  const handleIncrease = () => {
    if(length<5) setLength(length+1);
    setLength(length+1)
  }

  const handleDecrease = () => {
    if(length>0) setLength(length-1);
  }

  return (
    <>
      <h1 className='text-white text-4xl text-center'>Counter {length}</h1>
      <button 
      onClick={handleIncrease}
      className='text-white border text-4xl flex justify-center'>Increase {length}</button>
      <button 
      onClick={handleDecrease}
      className='text-white border text-4xl text-center'>Decrease {length}</button>
    </>
  )
}

export default App
