import React from 'react';
import './Header.css'
import { Link, Outlet } from 'react-router-dom';
import Slider from '../Slider/Slider';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="../../../public/images/png-clipart-chef-cooking-chef-food-hand-thumbnail-removebg-preview.png" alt="brandlogo" className='img-fluid rounded-circle' id='brandLogo' />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0" id='navItems'>
        
          <Link to={'/'} className='nav-items'>Home</Link>
      
      
          <Link to={'/about'}>About us</Link>
      
      
          <Link to={'/services'}>Our Services</Link>
        
          <Link to={'/location'}>Location</Link>
        
        
      </ul>
      <div className='d-flex justify-conter-center align-items-center gap-3'>
        <Link className='btn bg-dark text-white'>Sign Up</Link>
        <Link className='btn bg-dark-subtle'>Log in</Link>
      </div>
        
    </div>
  </div>
</nav>
{/* <Slider/> */}
        </div>
    );
    
};

export default Header;