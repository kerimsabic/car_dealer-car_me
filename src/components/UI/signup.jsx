import React from 'react'
import '../../styles/signup.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


const signup = () => {
  return (
    <div>
         <div>
            <div className="back-container2">
                <div className="logo-container2">
                <img src={Logo} alt="" /></div>
            </div>
            <div className="back-container">

      <div class="form signup">
                <div class="form-content">
                    <header className='header-signup'>Signup</header>
                    <form action="#">
                        <div class="field input-field">
                            <input type="email" placeholder="Email" class="input"/>
                        </div>
                        <div class="field input-field">
                            <input type="password" placeholder="Create password" class="password"/>
                        </div>
                        <div class="field input-field">
                            <input type="password" placeholder="Confirm password" class="password"/>
                            <i class='bx bx-hide eye-icon'></i>
                        </div>
                        <div class="field input-field">
                            <input type="Address" placeholder="Address" class="input"/>
                        </div>
                        <div class="field input-field">
                            <input type="email" placeholder="Phone Number" class="input"/>
                        </div>
                        <div class="field button-field">
                            <Link to='/home'><button>Signup</button></Link>
                        </div>
                        
                    </form>
                    <div class="form-link">
                        <span>Already have an account? <a href="#" class="link login-link">Login</a></span>
                    </div>
                </div>
                <div class="line"></div>
                <div class="media-options">
                    <a href="#" class="field facebook">
                        <i class='bx bxl-facebook facebook-icon'></i>
                        <span>Login with Facebook</span>
                    </a>
                </div>
                <div class="media-options">
                    <a href="#" class="field google">
                        <img src="#" alt="" class="google-img"/>
                        <span>Login with Google</span>
                    </a>
                </div>
            </div>
    </div>
    </div>
    </div>
  )
}

export default signup
