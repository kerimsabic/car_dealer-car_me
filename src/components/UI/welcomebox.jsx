import React from 'react'
import '../../styles/welcomebox.css'


const welcomebox = () => {
    return (
        <div className='welcome'>
            <h4>Best car website on the market</h4>
            <h1>Welcome to CarMe</h1>




            <div class="questions">

                <div class="container">

                    <div class="row">

                        <div class="col-md-4">
                            <div class="question-item">
                                <div class="line"></div>
                                <div class="welcome-icons">
                                    <i class="ri-price-tag-3-line"></i>
                                </div>
                                <p>Have a car you are trying to sell?<br></br>
                                    Post it here and save yoursefve from trouble</p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="question-item">
                                <div class="line"></div>
                                <div class="welcome-icons">
                                    <i class="ri-car-line"></i>
                                </div>
                                <p>Looking for a car?<br></br>
                                    You came to the right place.<br></br>
                                    Browse for your dream vehicle</p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="question-item">
                                <div class="line"></div>
                                <div class="welcome-icons">
                                    <i class="ri-home-3-line"></i>
                                </div>
                                <p>Have a preferred dealer or want to buy form a reputable car dealer?<br></br>
                                    Checkout our partners
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default welcomebox
