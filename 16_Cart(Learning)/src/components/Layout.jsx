import React from 'react'
import { Outlet } from 'react-router-dom'
import Cart from './Cart'
import Header from './Header'

const Layout = () => {
  return (
    <div className='bg-zinc-200'>
    <main className='w-[12000px] max-w-full m-auto p-5'>
        <Header />
        <Outlet /> {/* renders the current route selected */}
    </main>
    <Cart />
    </div>
  )
}

export default Layout