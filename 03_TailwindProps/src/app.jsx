import { useState } from 'preact/hooks'
import './app.css'
import Card from './Components/card'

export function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Sitanshu",
    age: 21
  }

  let newArr = [1, 2, 3]

  return (
    <>
      {/* <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1> */}
      <Card 
      username="chaiaurcode" 
      btnText="click me">
      </Card>
      <Card username="Sitanshi"></Card>
    </>
  )
}
