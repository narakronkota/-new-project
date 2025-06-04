import React from 'react'
import Hero from'../components/hero'
import FeaturedDestination from './FeaturedDestination'
import ExclusiveOffers from './ExclusiveOffers'
import Testimonial from './Testimonial'
import NewLetter from './NewLetter'
import Footer from './Footer'


const Home = () => {
  return (
    <>
        <Hero/>
        <FeaturedDestination/>
        <ExclusiveOffers/> 
        <Testimonial/>       
        <NewLetter/>
        
        
    </>
  )
}

export default Home