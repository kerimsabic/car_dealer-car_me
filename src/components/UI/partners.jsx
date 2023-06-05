import React from 'react'
import '../../styles/partners.css'
import Kramar from '../../assets/kramar.jpg'


const partners = () => {
    return (
        <div className='partners'>
            <div class="line-container">
                <div class="custom-line"></div>
            </div>
            <div class="garage-icon">
                <i class="ri-home-3-line"></i></div>
            <div class="dealers">
                <h3>Some of our trusted dealers</h3>
                <div class="line-container">
                    <div class="custom-line2"></div>
                </div>
                <div class="line-container">
                    <div class="custom-line3"></div>
                </div>


                <div class="dealers-icons">
                    <div class="icon5">
                        <img src={Kramar} alt="" />
                    </div>
                    <div class="icon5">
                        <img src={Kramar} alt="" />
                    </div>
                    <div class="icon5">
                        <img src={Kramar} alt="" />
                    </div>
                    <div class="icon5">
                        <img src={Kramar} alt="" />
                    </div>
                    <div class="icon5">
                        <img src={Kramar} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default partners
