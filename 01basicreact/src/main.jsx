import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Custom App !</h1>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Chai aur react"

const reactElement = React.createElement(
  'a', //tag
  { //object if not leave it empty
    href: 'https://google.com',
    target: '_blank'
  },
  'Click for Google', //children
  anotherUser //variable injection
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // anotherElement
  reactElement
)
