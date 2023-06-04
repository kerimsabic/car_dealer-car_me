import React from 'react'
import '../../styles/carItem.css'
import Car from '../UI/singleCar'

const CarItem = () => {
    return (
        
        <div className="popular-cars">
            <div class="pupular-vehicles">
                <h3>Popular vehicles</h3>
                <div class="line-container">
                    <div class="custom-line"></div>
                </div>
            </div>

            <div class="popular-cars-container">
                <div class="car-item">
                    <Car />
                </div>

                <div class="car-item">
                    <Car />
                </div>

                <div class="car-item">
                    <Car />
                </div>

                <div class="car-item">
                    <Car />
                </div>

                <div class="car-item">
                    <Car />
                </div>

                <div class="car-item">
                    <Car />
                </div>
            </div>

        </div>
    )
}

export default CarItem
