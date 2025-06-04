import React, { useState } from 'react'
import Title from '../../Title'
import { assets } from '../../../assets/assets'

const spac = () => {
    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null
    })
    const [inputs, setInputs] = useState({
        roomType: '',
        pricePerNight: 0,
        amennities :{
            'Free WiFi':false,
            'Room Service': false,
            'Mountain View': false,
            'Pool Access' :false,

        }
    })
  return (
     <form>
        <Title align='left' font='outfit' title='ADD ROOM' subTitle='Monitor your room listings, track bookings and analyze 
      revenue-all in one price Stay Update with real-time insight to ensure smmoth operation.'/>
      {/*****upload images */}
      <p className='text-gray-800 mt-10'>Images</p>
      <div className='grid grid-cols2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key)=>(
            <label htmlFor={`roomImage${key}`} key={key}>
                <img className='max-h-13 cursor-pointer opacity-80' src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea }alt="" />
                <input type="file" accept='image/*' id={`roomImage${key}`} hidden onChange={e=> setImages({...images,[key]: e.target.files[0]})} />

                
            </label>
            
        ))}
      </div>
      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
        <div className='flex-1 max-w-48'>
            <p className='text-gray-800 mt-4'>Room Tpe</p>
            <select value={inputs.roomType} onChange={e=> setInputs({...inputs, roomType: e.target.value})}>
                <option value="">Select Room Type</option>
                <option value="Single bed">Single bed</option>
                <option value="Double Bed">Double Bed</option>
                <option value="Luxury Room">Luxury Room</option>
                <option value="Family Suite">Family Suite</option>
            </select>
        </div>
      </div>
      <div>
        <p className='mt-4 text-gray-800'>
            Price <span className='text-xs'>/Night</span>
        </p>
        <input type="number" placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24' value={input.pricePerNight} onChange={e=>setInputs({...inputs, pricePerNight: e.target.value})}></input> 

      </div>



     </form>
     
      
     
     
  )
}

export default spac