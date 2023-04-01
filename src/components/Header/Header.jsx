import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg"  style={{backgroundColor:"#F7DB6A"}}>
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="../../../public/images/png-clipart-chef-cooking-chef-food-hand-thumbnail-removebg-preview.png" alt="brandlogo" className='img-fluid' id='brandLogo' />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Items</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Location</a>
        </li>
        
      </ul>
      <div className='d-flex justify-conter-center align-items-center gap-3'>
        <a href="#" className='btn bg-dark text-white'>Sign Up</a>
        <a href="#" className='btn bg-dark-subtle'>Log in</a>
      </div>
        
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;