import React from 'react'
import '../../styles/login.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const login = () => {
         
    return (
        <div>
            <div className="back-container2">
                <div className="logo-container2">
                <img src={Logo} alt="" /></div>
            </div>
            <div className="back-container">

                    <div class="form login">

                        <div class="form-content">
                            <header className='login-header'>Login</header>

                            <form action="#" className='actionform'>
                                <div class="field input-field4">
                                    <input type="email" placeholder="Email" class="input" className='input-email' />
                                </div>
                                <div class="field input-field4">
                                    <input type="password" placeholder="Password" class="password" />
                                    <i class="ri-eye-off-line eye-icon"></i>
                                </div>
                                <div class="form-link">
                                    <a href="#" class="forgot-pass">Forgot password?</a>
                                </div>
                                <div class="field button-field4">
                                    <Link to='/home'><button>Login</button></Link>
                                </div>
                            </form>

                            <div class="form-link">
                                <span>Don't have an account? </span> <Link > <span className='signup'> Signup</span></Link>
                            </div>
                        </div>

                        <div class="lineOr"></div>
                        <div class="media-options">
                            <a href="#" class="field facebook">
                                <i class="ri-facebook-circle-line"></i>
                                <span>Login with Facebook</span>
                            </a>
                        </div>
                        <div class="media-options">
                            <a href="#" class="field google">
                                <i class="ri-google-fill"></i>
                                <span>Login with Google</span>
                            </a>
                        </div>
                    </div>
               
            </div>
            
        </div>
    )
}

export default login
