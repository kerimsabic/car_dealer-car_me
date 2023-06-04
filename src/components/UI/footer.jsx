import React from 'react'
import '../../styles/footer.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png';

const footer = () => {
  return (
    <div>
      <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <span class="logo_name">CarME</span>
        </div>
        <div class="media-icons">
          <Link><i class="ri-facebook-line"></i></Link>
          <Link><i class="ri-instagram-line"></i></Link>
          <Link><i class="ri-youtube-fill"></i></Link>
          <Link><i class="ri-facebook-line"></i></Link>
          
         
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Company</li>
          <li><Link>Home</Link></li>
          <li><Link>Contact us</Link></li>
          <li><Link>About us</Link></li>
          <li><Link>Get started</Link></li>
        </ul>
        <ul class="box">
          <li class="link_name">Services</li>
          <li><Link>Publish a Car</Link></li>
          <li><Link>Sell a Car</Link></li>
          <li><Link>Find a Car</Link></li>
          <li><Link>Banner design</Link></li>
        </ul>
        <ul class="box">
          <li class="link_name">Account</li>
          <li><Link>Profile</Link></li>
          <li><Link>My account</Link></li>
        </ul>
        
        <ul class="box input-box">
            <div className="logo-part">
          <img src={Logo} alt="" /></div>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2023 <Link>Kerim</Link>All rights reserved</span>
        <span class="policy_terms">
          <Link> Privacy policy</Link>
          <Link> Tearms and conditions</Link>
        </span>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default footer
