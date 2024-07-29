import './App.css'
import Layout from './components/Layout'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:slug' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}