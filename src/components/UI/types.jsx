import React from 'react'
import '../../styles/types.css'
import sedan from '../../assets/sedan.jpg'
import sports from '../../assets/sports.jpg'
import suv from '../../assets/suv.jpg'
import compact from '../../assets/compact.jpg'

const types = () => {
    return (
        <div className='types'>
            <div class="types-container">
                <div class="type-item">
                    <img src={compact} />
                    <h2>Compact</h2>
                    <h5>Our most environmentally friendly</h5>
                    <ul class="feature-list">
                        <li><i class="ri-check-line"><span> Award-winning safety feature</span></i><br></br></li>
                        <li>
                            < i class="ri-check-line"><span>Family seating</span></i><br></br></li>
                        <li>
                            < i class="ri-check-line"><span>Luxury amenities</span></i><br></br></li>
                        <li>
                            < i class="ri-check-line"><span>Technology package</span></i><br></br></li>
                    </ul>
                </div>

                <div class="type-item">
                    <img src={sedan} />
                    <h2>Sedan</h2>
                    <h5>Our best-selling option</h5>
                    <ul class="feature-list">
                        <li>
                            < i class="ri-check-line"><span>Award-winning safety feature</span></i><br></br></li>
                        <li>< i class="ri-check-line"><span>Family seating</span></i><br></br></li>
                        <li> < i class="ri-check-line"><span>Luxury amenities</span></i><br></br></li>
                        <li>< i class="ri-check-line"><span>Technology package</span></i><br></br></li>
                        <li> < i class="ri-check-line"><span>Best-in-class Warranty</span></i><br></br></li>
                    </ul>
                </div>

                <div class="type-item">
                    <img src={sports} />
                    <h2>Sports</h2>
                    <h5>Have more fun on-the-go</h5>
                    <ul class="feature-list">
                        <li> < i class="ri-check-line"><span >More horsepower</span></i><br></br></li>
                        <li>< i class="ri-check-line"><span >Personal seating</span></i><br></br></li>
                        <li> < i class="ri-check-line"><span>Luxury amenities</span></i><br></br></li>
                    </ul>
                </div>

                <div class="type-item">
                    <img src={suv} />
                    <h2>SUV</h2>
                    <h5>Our best-selling option</h5>
                    <ul class="feature-list">
                        <li>< i class="ri-check-line"><span>Award-winning safety feature</span></i><br></br></li>
                        <li>< i class="ri-check-line"><span>Family seating</span></i><br></br></li>
                        <li>< i class="ri-check-line"><span>Luxury amenities</span></i><br></br></li>
                        <li>< i class="ri-check-line"><span>Technology package</span></i><br></br></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default types
