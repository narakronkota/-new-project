import React from 'react'
import { assets, facilityIcons, roomsDummyData } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../StarRating'

const Allrooms = () => {

    const navigate = useNavigate()
  return (
    <div className=' flex-col-reverse lg:flex-row items-start justifly-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div>
            <div>
                 <h1 className='font-playfair text-4xl md:text-[40px]'>All  rooms</h1>
            <p className='text-sm md:text-base text-gray-500/90 mt-2'>Tke adventage of our limited-time offers and special 
            packages to enhance your stay andcreate unforgettable memories. </p>
            </div>
           
        </div>
        {/***** ด */}
        <div>

        </div>
    
      

        {roomsDummyData.map((room)=>(
            <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
                <img onClick={()=>{navigate(`/rooms/${room._id}`); scrollTo(0,0)}}
                src={room.images[0]} alt="hotel-img" title='View Room Details'
                className='max-h-65 md:w1/2 rounded-xl shadow-lg object-cover cursor-pointer' />
           
                <div>
                    <p className='text-gray-500'>{room.hotel.city}</p>
                
                    <p onClick={()=>{navigate(`/rooms/${room._id}`); scrollTo(0,0)}}></p>
                    <p className='text-gray-800 text-3l font-playfair cursos-pointer'>{room.hotel.name}</p>
                    <div className='flex items-center'>
                        <StarRating/>
                    <p className='ml-2'>200+ review</p>
                </div>    
                
                    <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                        <img src={assets.locationIcon} alt="location-icon" />
                        <span>{room.hotel.address}</span>
                    </div>
                     {/********  ห้อง  */}
                     <div className='flex items-center mt-3 mb-6 gap-4'>
                        {room.amenities.map((item, index)=>(
                            <div key={index} className='flex items-center gap-2 px-3 py-5 rounded-lg bg-[#F5F5FF]/70'>
                                <img src={facilityIcons[item]} alt={item} className='w-10 h-5' />
                                <p className='text-xs'>{item}</p>
                            </div>
                        ))}
                     </div>
                     {/*Room ราคาห้หองนั้นเเหละ*/}
                     <p className='text-xl font-medium text-gray-700'>{room.pricePerNight} / night</p>
                    
                     
                     
                </div>
            </div>
        ))}
</div> 






                
        
  ) 
}
     
   
export default Allrooms