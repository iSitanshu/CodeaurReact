import { useState , useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [number,setNumber] = useState(false)
  const [char,setChar] = useState(false);
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, number, char, setPassword])
  
  const passwordRef = useRef(null); //Use the useRef hook to create a reference to the input field that holds the password

  const copypassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{passwordGenerator()},
  [number,length,char])

  return (
    <>
      <div className='header'>
        <h1>Password Generator</h1>
      </div>
      <div className='top'>
        <div className='main'>
          <input
            type="text"
            value={password}
            readOnly
            className='input-box'
            ref={passwordRef}
          />
          <button onClick={copypassword}>Copy</button>
        </div>
        <div className='condition'>
          <div className='rtt'><input
            type="range"
            min={0}
            max={50}
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length : {length} </label></div>
          <div className='num'><input type="checkbox" onChange={()=>setNumber((prev)=>!prev)} />
          <label>Number</label></div>
          <div className='char'><input type="checkbox" onChange={()=>setChar((prev)=>!prev)}/>
          <label>Character</label></div>
        </div>
      </div>
    </>
  )
}

export default App
