import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Blocks from './components/Blocks'
import './App.css'

function App() {
  const [state , setState ] = useState (Array(9).fill(null))
  console.log(state);

  return (
    <>
      <div className="main">
        <div className="row">
          <Blocks className="efmlkf" />
          <Blocks />
          <Blocks />
        </div>
        <div className='row'>
          <Blocks />
          <Blocks />
          <Blocks />
        </div>
        <div className='row'>
          <Blocks />
          <Blocks />
          <Blocks />
        </div>
      </div>
    </>
  )
}

export default App
