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
              <li><a className='link' href="#about">About</a></li>
              <li><a className='btn' target="_blank" href = "https://wa.me/send?phone=918887339950&text=Hello%20Utkarsh%20😀" >Say Hello</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar