import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
function Navbar() {
  return (
    <>
      <div className='frontScreen'>
        <div className="navBar">
          <div className="titleLogo">
            <div className="logo">
              <Link to="/">
                <div className='tilogo'>
              <img src={Logo} alt="logo" />
              <div>Utkarsh<br/>
               <span>Verma</span></div>
               </div>
               </Link>
            </div>
          </div>
          <div className="navbarLink">
            <ul>
              <li><Link className='link' to="/about">About</Link></li>
              <li><Link className='btn' to="/contact">Say Hello</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar