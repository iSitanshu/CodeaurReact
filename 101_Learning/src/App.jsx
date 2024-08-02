import React from 'react'
import Button from './components/Button'
import Dabba from './components/Dabba'
import { item2 } from './components/Info'
import { items } from './components/Info2'
import IMDB from './components/IMDB'

const App = () => {
  return (
    <>
      <header className='flex p-11 gap-11'>
        <Dabba text='Revamp your home in style' items={items}/>
        <Dabba text='Application for your home | Up to 55% off' items={item2}/>
      </header>
      <movie>
        <IMDB text='Top 10 on IMDB this week' />
        <IMDB className='border border-gray-300 rounded-lg p-4' text='Fan Favorites' below='This weeks top TV and movies'/>
      </movie>
    </>
  )
}

export default App