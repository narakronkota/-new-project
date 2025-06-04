import React from 'react'
import { Navbar } from '../../HotelOwner/Navbar'
import Sildbar from '../../HotelOwner/Sildbar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Navbar/>
        <div className='flex h-full'>
          <Sildbar/>
          <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Layout