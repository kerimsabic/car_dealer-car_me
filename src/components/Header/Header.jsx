import React from 'react'
import "../../styles/header.css";
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { useState } from "react";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }



  return (
    <header className="header">
      <div className="first-box"></div>
      <div className="navigation">
        <div class="hamburger-menu" onClick={handleShowNavbar}>
          <i class="ri-menu-line"></i>
        </div>
        <div class="logo">
          <Link to='/home'><img src={Logo} alt="Logo" /></Link>
        </div>
        <div class="search-bar">
          <input type="text" placeholder="" />
        </div>
        <div class="account">
          <Link to='/user'><i class="ri-account-circle-line"></i></Link>
          <Link to='/signup'><button class="signup-button" id="signup"> Sign Up</button></Link>
          <Link to='/login'><button class="login-button">Login</button></Link>
        </div>
      </div>
      <div className={`secondary-navigation  ${showNavbar && 'active'}`}>
        <Link to='/home'><button class="home" id="signup" onClick={handleShowNavbar}> Home</button></Link>
        <Link to='/publishcar'><button class="publishcar" onClick={handleShowNavbar}>Publish Car</button></Link>
        <Link to='/detailCar'><button class="partners" id="signup" onClick={handleShowNavbar}> Partners</button></Link>
        <Link><button class="carblog" onClick={handleShowNavbar}>Car Blog</button></Link>
      </div>



      <div class="fixed-bottom-navigation">
        <ul>
          <li><Link to='/home'><i class="ri-home-line"></i></Link></li>
          <li><Link to ='/cars'><i class="ri-search-line"></i></Link></li>
          <li><Link to='/publishCar'><i class="ri-add-line"></i></Link></li>
          <li><Link to='/user'><i class="ri-user-line"></i></Link></li>
        </ul>
      </div>

    </header>
  )
}

export default Header
