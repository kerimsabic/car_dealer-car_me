import React from 'react'

import { useMediaQuery } from 'react-responsive';

import '../../styles/carItem.css'

import Car from '../UI/singleCar'
import TwoCars from '../UI/twocars'

const CarItem = () => {
    const isMobile = useMediaQuery({ maxWidth: 800 });
    return (
        
        <div className="popular-cars">
            <div class="pupular-vehicles">
                <h3>Popular vehicles</h3>
                <div class="line-container">
                    <div class="custom-line"></div>
                </div>
            </div>

            <div class="container">
                <div class="row">

                    <div class="col-md-4">
                        <Car />
                    </div>

                    <div class="col-md-4">
                        <Car />
                    </div>

                    <div class="col-md-4">
                        <Car />
                    </div>
                </div>

                
            </div>

            {!isMobile && (
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-4">
              <Car />
            </div>

            <div class="col-md-4 col-sm-4">
              <Car />
            </div>

            <div class="col-md-4 col-sm-4">
              <Car />
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div class="container2">
          <div class="row">
            <TwoCars/>
          </div>
        </div>
      )}

        </div>
    )
}

export default CarItem
