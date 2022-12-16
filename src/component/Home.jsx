import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Navbar from './Navbar';
import homeImage from "../images/utkarshhome.png";
import Avatar from "../images/avatar.svg";
import HeroDev from "../images/hero-devices.svg";
function Home() {
  return (
    <>
      <Navbar />
      <div className="frontImagehello">
        <div className="fihello">
          <h1 className='fihellotext'>
            Hello <br /> <span> I am <br />Utkarsh </span>
          </h1>
        </div>
        <div className="fihimg">
          <img src={homeImage} alt="utkarsh" />
        </div>
      </div>

      <div className="simInfo">
        <div className='sinfo'>
          <h2>Full Stack Developer & Mentor</h2>
          <p>I design and code, simple things beautifully, and I love what I do.</p>
        </div>
        <div className="personaHo">
          <img src={Avatar} alt="" />
        </div>
        <div className="simage">
          <img src={HeroDev} alt="" />
        </div>

      </div>


      <div className="paraAbout">
        <div className="aptext">
          <h2>Hi, I’m Utkarsh. Nice to see you here.</h2>
          <p>Since beginning my journey as a freelance designer over 4 years ago, I've done remote work for agencies, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
        </div>
      </div>

      <div className="tyWorks">
        <div className='tyWorks1'>
          <div className="ty ty1"></div>
          <div className="ty ty2"></div>
          <div className="ty ty3"></div>
        </div>
      </div>

    </>
  )
}

export default Home;