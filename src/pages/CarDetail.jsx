import React from 'react'

import { useParams } from 'react-router-dom'


import Detail from '../components/UI/DetailCarTop'
import Header from '../components/Header/Header'
import Footer from'../components/Footer/Footer'



const CarDetail = () => {

  
  return (
    <div>
      <Header/>
        <Detail/>
      <Footer/>
    </div>
  )
}

export default CarDetail
