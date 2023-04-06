import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container'  id='footer'>
            <div className="row text-center  pt-3  mt-5 p-4">
                <div className="col col-md-4 col-lg-4 links">
                    <h4 className='text-white'>Quick Links</h4>
                    <ul className='d-flex flex-column justify-content-center align-items-center  navbar-nav'>
                        <li><a href='#' className='nav-link'>T-Shirt</a></li>
                        <li><a href='#' className='nav-link'>Cake</a></li>
                        <li><a href='#' className='nav-link'>Restaurant Food</a></li>
                    </ul>
                </div>
                <div className="col col-md-4 col-lg-4 links">
                <h4 className='text-white'>Contact us</h4>
                    <ul className='navbar-nav'>
                        <li><a href='#' className='nav-link'>ShopsBD</a></li>
                        <li><a href='#' className='nav-link'>InstaShop</a></li>
                        <li><a href='#' className='nav-link'>TwitShop</a></li>
                        <li><a href='#' className='nav-link'>++012345</a></li>
                    </ul>
                </div>
                <div className="col col-md-4 col-lg-4">
                    <h4 className='text-white'>Order us via Message:</h4>
                    <div>
                        <form className='d-flex flex-column form-group gap-2'>
                            <textarea type="text" className='form-control' rows={10} />
                            <input type='submit' className='w-25 m-auto p-2 border-0 ' value="Send"  style={{backgroundColor:"#F7DB6A"}}/>
                        </form>
                    </div>
                </div>
            </div>
            <p className='text-white text-center mb-5'>@ copyright 2023,All rights reserved</p>
            
        </div>
    );
};

export default Footer;