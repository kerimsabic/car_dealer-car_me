import React from 'react'
import Background from '../assets/jeep-background.jpg'
import SearchBox from '../components/UI/SearchBox'
import Welcomebox from '../components/UI/welcomebox'
import Types from '../components/UI/types'
import Devider from '../components/UI/devider'
import CarItem from '../components/UI/carItem'
import Partners from '../components/UI/partners'
import Car  from '../components/UI/singleCar'



const Home = () => {
  return (
  <div>
    <div className="image-container">
      <img src={Background} alt="Image" className="responsive-image" style={{ width: '100%' }}/></div>
      <SearchBox />
      <Welcomebox />
      <Devider />
      <  Types />
      <Devider />
      <CarItem/>
      <Devider />
     <Partners/> 
     <Devider />

    
    </div> 
  )
}

export default Home
