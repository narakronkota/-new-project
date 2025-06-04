import React from 'react'
import Navbar from './components/Navbar'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import Allrooms from './components/pages/Allrooms';
import Roomdetails from './components/pages/Roomdetails';
import Mybookings from './components/pages/Mybookings';
import Hotelreg from './components/Hotelreg';
import Layout from './components/pages/HotelOwner/Layout';
import Dashboard from './components/pages/HotelOwner/DashBoard';
import AddRoommm from './components/pages/HotelOwner/AddRoommm';
import Listrooms from './components/pages/HotelOwner/Listrooms';







const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  
  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      {false && <Hotelreg/>}
      <div className='min-h-[70vh]'>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/rooms' element={<Allrooms/>} />
        <Route path='/rooms/:id' element={<Roomdetails/>} />
        <Route path='/my-bookings' element={<Mybookings/>} />
        <Route path='/owner' element={<Layout/>}> 
            <Route index element={<Dashboard/>}/>       
            <Route path="add-room" element={<AddRoommm/>}/>
            <Route path="list-room" element={<Listrooms/>}/>
            
            
            
            

        </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
    
  )
}

export default App