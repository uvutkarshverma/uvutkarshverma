import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import homeImage from "../images/utkarshhome.png";
import Avatar from "../images/avatar.svg";
import HeroDev from "../images/hero-devices.svg";
import Image1 from "../images/image1.jpg";
import Logo from "../images/logo.png";
function Home() {
  return (
    <>
      <Navbar />
      <div className="frontImagehello">
        <div className="fihello">
          <h1 className="fihellotext">
            Hello <br />{" "}
            <span>
              {" "}
              I am <br />
              Utkarsh{" "}
            </span>
          </h1>
        </div>
        <div className="fihimg">
          <img src={homeImage} alt="utkarsh" />
        </div>
      </div>
      <div className="simInfo">
        <div className="sinfo">
          <h2>Full Stack Developer & Mentor</h2>
          <p>
            I design and code, simple things beautifully, and I love what I do.
          </p>
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
          <p>
            Since beginning my journey as a freelance designer over 4 years ago,
            I've done remote work for agencies, and collaborated with talented
            people to create digital products for both business and consumer
            use. I'm quietly confident, naturally curious, and perpetually
            working on improving my chops one design problem at a time.
          </p>
        </div>
      </div>
      <div className="tyWorks">
        <h2>Quality</h2>
        <div className="tyWorks1">
          <div className="ty">
            <div className="tyimgLogo">
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M28.5 40v-3h6q1.05 0 1.775-.725Q37 35.55 37 34.5v-5q0-1.85 1.125-3.3 1.125-1.45 2.875-2v-.4q-1.75-.5-2.875-1.975T37 18.5v-5q0-1.05-.725-1.775Q35.55 11 34.5 11h-6V8h6q2.3 0 3.9 1.6t1.6 3.9v5q0 1.05.725 1.775Q41.45 21 42.5 21H44v6h-1.5q-1.05 0-1.775.725Q40 28.45 40 29.5v5q0 2.3-1.6 3.9T34.5 40Zm-15 0q-2.3 0-3.9-1.6T8 34.5v-5q0-1.05-.725-1.775Q6.55 27 5.5 27H4v-6h1.5q1.05 0 1.775-.725Q8 19.55 8 18.5v-5q0-2.3 1.6-3.9T13.5 8h6v3h-6q-1.05 0-1.775.725Q11 12.45 11 13.5v5q0 1.85-1.125 3.325T7 23.8v.4q1.75.55 2.875 2T11 29.5v5q0 1.05.725 1.775Q12.45 37 13.5 37h6v3Z" />
              </svg>
            </div>
            <h3>Frontend Developer</h3>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <h4>Languages I speak:</h4>
            <p>HTML, Pug, Slim, CSS, Sass, Git</p>
            <h4>Dev Tools:</h4>
            <span>Atom</span>
            <span>Vs Code</span>
            <span>Live Server</span>
            <span>Xampp</span>
            <span>Chrome</span>
          </div>
          <div className="ty">
            <div className="tyimgLogo">
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M28.5 40v-3h6q1.05 0 1.775-.725Q37 35.55 37 34.5v-5q0-1.85 1.125-3.3 1.125-1.45 2.875-2v-.4q-1.75-.5-2.875-1.975T37 18.5v-5q0-1.05-.725-1.775Q35.55 11 34.5 11h-6V8h6q2.3 0 3.9 1.6t1.6 3.9v5q0 1.05.725 1.775Q41.45 21 42.5 21H44v6h-1.5q-1.05 0-1.775.725Q40 28.45 40 29.5v5q0 2.3-1.6 3.9T34.5 40Zm-15 0q-2.3 0-3.9-1.6T8 34.5v-5q0-1.05-.725-1.775Q6.55 27 5.5 27H4v-6h1.5q1.05 0 1.775-.725Q8 19.55 8 18.5v-5q0-2.3 1.6-3.9T13.5 8h6v3h-6q-1.05 0-1.775.725Q11 12.45 11 13.5v5q0 1.85-1.125 3.325T7 23.8v.4q1.75.55 2.875 2T11 29.5v5q0 1.05.725 1.775Q12.45 37 13.5 37h6v3Z" />
              </svg>
            </div>
            <h3>Frontend Developer</h3>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <h4>Languages I speak:</h4>
            <p>HTML, Pug, Slim, CSS, Sass, Git</p>
            <h4>Dev Tools:</h4>
            <span>Atom</span>
            <span>Vs Code</span>
            <span>Live Server</span>
            <span>Xampp</span>
            <span>Chrome</span>
          </div>
          <div className="ty">
            <div className="tyimgLogo">
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M28.5 40v-3h6q1.05 0 1.775-.725Q37 35.55 37 34.5v-5q0-1.85 1.125-3.3 1.125-1.45 2.875-2v-.4q-1.75-.5-2.875-1.975T37 18.5v-5q0-1.05-.725-1.775Q35.55 11 34.5 11h-6V8h6q2.3 0 3.9 1.6t1.6 3.9v5q0 1.05.725 1.775Q41.45 21 42.5 21H44v6h-1.5q-1.05 0-1.775.725Q40 28.45 40 29.5v5q0 2.3-1.6 3.9T34.5 40Zm-15 0q-2.3 0-3.9-1.6T8 34.5v-5q0-1.05-.725-1.775Q6.55 27 5.5 27H4v-6h1.5q1.05 0 1.775-.725Q8 19.55 8 18.5v-5q0-2.3 1.6-3.9T13.5 8h6v3h-6q-1.05 0-1.775.725Q11 12.45 11 13.5v5q0 1.85-1.125 3.325T7 23.8v.4q1.75.55 2.875 2T11 29.5v5q0 1.05.725 1.775Q12.45 37 13.5 37h6v3Z" />
              </svg>
            </div>
            <h3>Frontend Developer</h3>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <h4>Languages I speak:</h4>
            <p>HTML, Pug, Slim, CSS, Sass, Git</p>
            <h4>Dev Tools:</h4>
            <span>Atom</span>
            <span>Vs Code</span>
            <span>Live Server</span>
            <span>Xampp</span>
            <span>Chrome</span>
          </div>
        </div>
      </div>
      {/* Section for projects */}
      <div className="projects">
        <h2>My Recent Projects</h2>
        <p>
          Here are a few past design projects I've worked on. Want to see more?{" "}
          <Link to="/contact"> Email me</Link>.
        </p>
        <div className="tyWorks2">
          <div className="ty1">
            <div className="ty1Direct">
              <img src={Image1} alt="" />
            </div>
            <div className="ty1Hover">
              <p>
                High-end, custom residential renovaters serving Fraser Valley
                homeowners.
              </p>
              <div>
                <a href="https://github.com/uvutkarshverma" className="btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="ty1">
            <div className="ty1Direct">
              <img src={Image1} alt="" />
            </div>
            <div className="ty1Hover">
              <p>
                High-end, custom residential renovaters serving Fraser Valley
                homeowners.
              </p>
              <div>
                <a href="https://github.com/uvutkarshverma" className="btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="ty1">
            <div className="ty1Direct">
              <img src={Image1} alt="" />
            </div>
            <div className="ty1Hover">
              <p>
                High-end, custom residential renovaters serving Fraser Valley
                homeowners.
              </p>
              <div>
                <a href="https://github.com/uvutkarshverma" className="btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="ty1">
            <div className="ty1Direct">
              <img src={Image1} alt="" />
            </div>
            <div className="ty1Hover">
              <p>
                High-end, custom residential renovaters serving Fraser Valley
                homeowners.
              </p>
              <div>
                <a href="https://github.com/uvutkarshverma" className="btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="ty1">
            <div className="ty1Direct">
              <img src={Image1} alt="" />
            </div>
            <div className="ty1Hover">
              <p>
                High-end, custom residential renovaters serving Fraser Valley
                homeowners.
              </p>
              <div>
                <a href="https://github.com/uvutkarshverma" className="btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="ty1">
            <div className="ty1Direct">
              <img src={Image1} alt="" />
            </div>
            <div className="ty1Hover">
              <p>
                High-end, custom residential renovaters serving Fraser Valley
                homeowners.
              </p>
              <div>
                <a href="https://github.com/uvutkarshverma" className="btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="fmog">
          <Link to="https://github.com/uvutkarshverma" className="btn fmog">
            Find More on Github
          </Link>
        </div>
      </div>
      <div className="startupMain">
        <div className="startupContent">
          <div className="startupCtext">
            <h2>My Startup Projects</h2>
            <p>
              I'm a bit of a digital product junky. Over the years, I've used
              hundreds of web and mobile apps in different industries and
              verticals. Eventually, I decided that it would be a fun challenge
              to try designing and building my own.
            </p>
          </div>

          <div className="startupCard">
            <div className="scard">
              <div>
                <img src={Logo} alt="" />
              </div>
              <p>
                High-end, custom residential renovaters serving Fraser
                residential renovaters serving FraserValley homeowners.
              </p>
              <a href="https://github.com/uvutkarshverma">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </svg>
                Know More
              </a>
            </div>
            <div className="scard">
              <div>
                <img src={Logo} alt="" />
              </div>
              <p>
                High-end, custom residential renovaters serving Fraser
                residential renovaters serving FraserValley homeowners.
              </p>
              <a href="https://github.com/uvutkarshverma">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </svg>
                Know More
              </a>
            </div>
            <div className="scard">
              <div>
                <img src={Logo} alt="" />
              </div>
              <p>
                High-end, custom residential renovaters serving Fraser
                residential renovaters serving FraserValley homeowners.
              </p>
              <a href="https://github.com/uvutkarshverma">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </svg>
                Know More
              </a>
            </div>
            <div className="scard">
              <div>
                <img src={Logo} alt="" />
              </div>
              <p>
                High-end, custom residential renovaters serving Fraser
                residential renovaters serving FraserValley homeowners.
              </p>
              <a href="https://github.com/uvutkarshverma">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </svg>
                Know More
              </a>
            </div>
            <div className="scard">
              <div>
                <img src={Logo} alt="" />
              </div>
              <p>
                High-end, custom residential renovaters serving Fraser
                residential renovaters serving FraserValley homeowners.
              </p>
              <a href="https://github.com/uvutkarshverma">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </svg>
                 Know More
              </a>
            </div>
            <div className="scard">
              <div>
                <img src={Logo} alt="" />
              </div>
              <p>
                High-end, custom residential renovaters serving Fraser
                residential renovaters serving FraserValley homeowners.
              </p>
              <a href="https://github.com/uvutkarshverma">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-up-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                  />
                </svg>
                Know More
              </a>
            </div>
          </div>
        </div>
        <div className="statupcolor"></div>
      </div>
      ffffffffffffffffffffffff
    </>
  );
}

export default Home;
