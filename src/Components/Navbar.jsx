import React, { useContext, useEffect, useState } from 'react';
import logo from '../Images/logo (1).png';
import '../Components/Styles/Navbar.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {CartContext} from '../Components/Context/CartProvider'
export const Navbar = () => {

  const {cartItems} = useContext(CartContext)
  useEffect(() => {
    Aos.init()
  })
  return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link data-aos = 'fade-right' data-aos-duration = '1000' className={`navbar-brand `} to={'/'}>
            <img src={logo} alt="" />
          </Link>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-4 navItems" data-aos = 'fade-left' data-aos-duration = '1000'>
              <li className={`nav-item transition `}>
                <Link className="nav-link " aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className={`nav-item transition `}>
                <Link className="nav-link" to={'/shop'}>Our Shop</Link>
              </li>
              <li className={`nav-item transition `}>
                <Link to={'/contact'} className="nav-link" href="#">Contact Us</Link>
              </li>
              <Link to={'/cart'} className={`nav-item transition d-flex position-relative`}
                style={{
                  paddingLeft : '10px',
                  paddingRight: '10px'

                }}>
                <a className="nav-link" href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                <div className='cartItems'><p>{cartItems}</p></div>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
