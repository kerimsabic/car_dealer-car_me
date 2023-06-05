import React from 'react'
import '../../styles/login.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const login = () => {

    return (
<div className="login-screen2">
        <div className="header-signup">
            <div className="image-container10"><img src={Logo} alt="" /></div>
            
        </div>
        <div className='login-screen'>




            <div class="form-login">

                <div class="form-content">
                    <header className='login-header'>Login</header>

                    <form action="#" className='actionform'>
                        <div class="field input-field4">
                            <input type="email" placeholder="Email" class="input" className='input-email' />
                        </div>
                        <div class="field input-field4">
                            <input type="password" placeholder="Password" class="password" />
                            <i class="ri-eye-off-line eye-icon-login"></i>
                        </div>
                        <div class="form-link2">
                            <a href="#" class="forgot-pass">Forgot password?</a>
                        </div>
                        <div class="field button-field4">
                            <Link to='/home'><button className='login-button2'>Login</button></Link>
                        </div>
                    </form>

                    <div class="form-link2">
                        <span className='dont-account'>Don't have an account? </span> <Link to='/signup'> <span className='signup3'> Signup</span></Link>
                    </div>
                </div>

                <div class="lineOr"></div>
                <div class="media-options3">
                    <a href="#" class="field facebook">
                        <i class="ri-facebook-circle-line"></i>
                        <span>Login with Facebook</span>
                    </a>
                </div>
                <div class="media-options3">
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
