import React from 'react'
import '../../styles/twocars.css'
import Car from '../UI/singleCar'

const twocars = () => {
    return (
       
            <div class="container">
                <div class="row">

                    <div class="col-md-6">
                        <Car/>
                    </div>

                    <div class="col-md-6">
                        <Car/>
                    </div>

                </div>
            </div>
        
    )
}

export default twocars
