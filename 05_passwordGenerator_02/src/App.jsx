import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <h1>Password Generator</h1>
      </div>
      <div className='main'>
        <input 
        type="password"
        readOnly
        className='input-box'
        />
        <button>Copy</button>
      </div>
      <div className='condition'>
        
      </div>
    </>
  )
}

export default App
