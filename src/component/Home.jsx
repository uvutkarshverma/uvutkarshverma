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
        <h2 >Quality</h2>
        <div className='tyWorks1'>
          <div className="ty ty1">
            <div className="tyimgLogo">
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M0 30V18h2.4v4.45h5.4V18h2.4v12H7.8v-5.15H2.4V30Zm15.8 0v-9.6h-3.5V18h9.4v2.4h-3.5V30Zm8 0V19.7q0-.75.475-1.225Q24.75 18 25.5 18h10q.75 0 1.225.475.475.475.475 1.225V30h-2.4v-9.6h-3.1v7.5h-2.4v-7.5h-3.1V30Zm16.3 0V18h2.4v9.6H48V30Z" /></svg>
            </div>
          </div>
          <div className="ty ty2"></div>
          <div className="ty ty3"></div>
        </div>
      </div>

    </>
  )
}

export default Home;