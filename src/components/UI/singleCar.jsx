import React from 'react'
import '../../styles/singleCar.css'
import GLA from '../../assets/gla.jpeg'
import { Link } from 'react-router-dom';

const singleCar = () => {
    return (
        
            <div className='single-car'>
                <div class="container">
                    <Link to='/detailCar' >
                    <div class="card">
                        <div class="img"><img src={GLA} alt="" /></div>
                        <div class="info-container">
                            <div class="eye-icon">
                                <i class="ri-eye-fill"></i>
                                <span class="info-number">200</span>
                            </div>
                        </div>
                        <div class="divider"></div>
                        <div class="price">
                            <h3>52.700 KM</h3>
                            <p>Mercedes-Benz GLA 220d</p>
                        </div>
                        <div class="icons">
                            <i class="ri-car-line"><span className='data'>10.00km</span></i>
                            <i class="ri-community-line"><span className='data'>Sarajevo</span></i><br></br>
                            <i class="ri-calendar-2-line"><span className='data'>12020</span></i><br></br>
                            <i class="ri-gas-station-line"><span className='data'>Diesel</span></i><br></br>
                        </div>
                    </div></Link>
                </div>
            </div>
        

    )
}

export default singleCar
