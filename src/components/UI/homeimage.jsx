import React from 'react'
import '../../styles/homeimage.css'
import Background from '../../assets/jeep-background.jpg'

const homeimage = () => {
  return (
    <div className="image-container">
    <img src={Background} alt="Image" className='responsive-image'/><br></br>
    </div>
  )
}

export default homeimage
