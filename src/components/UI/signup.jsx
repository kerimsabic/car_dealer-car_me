import React from 'react'
import '../../styles/login.css'

const signup = () => {
  return (
    <div>
      <div class="form signup">
                <div class="form-content">
                    <header>Signup</header>
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
                        <div class="field button-field">
                            <button>Signup</button>
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
  )
}

export default signup
