import React from 'react'
import '../../styles/signup.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import Devier from '../../components/UI/devider'


const signup = () => {
  return (

    <div className="signup-screen2">

        <div className="header-signup">
            <div className="image-container10"><img src={Logo} alt="" /></div>
            
        </div>
    
    <div className='signup-screen'>

    


            <div class="form-signup">

                <div class="form-content-signup">
                    <header className='signup-header'>SignUp</header>

                    <form action="#" className='actionform2'>
                    <div class="field input-field5">
                            <input type="email" placeholder="UserName" class="input2" className='input-email2' />
                        </div>
                        <div class="field input-field5">
                            <input type="email" placeholder="Email" class="input2" className='input-email2' />
                        </div>
                        <div class="field input-field5">
                            <input type="email" placeholder="Address" class="input2" className='input-email2' />
                        </div>
                        <div class="field input-field5">
                            <input type="email" placeholder="Phone number" class="input2" className='input-email2' />
                        </div>
                        <div class="field input-field5">
                            <input type="password" placeholder="Password" class="password" />
                            <i class="ri-eye-off-line eye-icon-signup"></i>
                        </div>
                        
                        <div class="field button-field5">
                            <Link to='/home'><button className='signup-button2'>SignUp</button></Link>
                        </div>
                    </form>

                    
                </div>

                <div class="lineOr"></div>
                <div class="media-options2">
                    <a href="#" class="field-facebook2">
                        <i class="ri-facebook-circle-line"></i>
                        <span>SignUp with Facebook</span>
                    </a>
                </div>
                <div class="media-options2">
                    <a href="#" class="field google">
                        <i class="ri-google-fill"></i>
                        <span>SignUp with Google</span>
                    </a>
                </div>
            </div>

            </div>
        </div>
  )
}

export default signup
