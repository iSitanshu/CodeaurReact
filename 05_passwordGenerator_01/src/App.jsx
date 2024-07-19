import { useEffect, useRef, useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [charAllowed, setCharAllowed] = useState(false)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const passwordRef = useRef(null); //Use the useRef hook to create a reference to the input field that holds the password

  const copypassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className='nav'>
        <h1 className='heading'>Password Generator</h1>
        <div className="main">
          <div className="top">
            <input type="text" className='input' value={password} placeholder='Password' readOnly ref={passwordRef}/>
            <button onClick={copypassword}>Copy</button>
          </div>
          <div className="bottom">
            <div>
              <input type="range" max={100} min={6} onChange={(e) => { setLength(e.target.value) }} />
              <label>Length : {length} </label>
            </div>
            <div>
              <input type="checkbox" onChange={() => setNumberAllowed((prev) => !prev)} />
              <label>Number</label>
            </div>
            <div>
              <input type="checkbox" onChange={() => setCharAllowed((prev) => !prev)} />
              <label>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
