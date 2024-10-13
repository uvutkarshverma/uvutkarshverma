import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import homeImage from "../images/utkarsh.png";
import Avatar from "../images/avatar.svg";
import Avatar1 from "../images/profile-pic.png";
import HeroDev from "../images/hero-devices.svg";
import Logo from "../images/logo.png";
import fateai from "../images/fateai.png";
import qnastop from "../images/qnastop.jpg";
import food from "../images/food.jpg";


import Anumak from "../images/company/aNumak.png";
import Nuvo from "../images/company/nuvo.png";
import Jug from "../images/company/jug.png";
import ayodhyamahotsav from "../images/company/ayodhyamahotsav.png";
import srsfashion from "../images/company/SRS_LOGO_.png";


import NuvoOwner from "../images/clientimg/nuvo.jpeg";

function Home() {

  const dict1 = [
    `<div class="slide-col slide-active">
    <img src=${Logo} alt="" />
    <h3>“Matt's a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work.”</h3>
    <p>Alvin Engler</p>
    <span>CEO, West Third Enterprises, Inc.</span>
  </div>`,
    `<div class="slide-col slide-active">
  <img src={Logo} alt="" />
  <h3>“Matt's a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work.”</h3>
  <p>Alvin Engler</p>
  <span>CEO, West Third Enterprises, Inc.</span>
</div>`
  ];
  let i = 0;
  const htmlPart = dict1[0];
  function nextSlides() {
    console.log(i);
    i = (i + 1);
    console.log("finishnext");
  }

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
          Creating impactful solutions and inspiring the next wave of developers.
          </p>
        </div>
        <div className="personaHo" >
          <img src={Avatar1} alt="" />
        </div>
        <div className="simage">
          <img src={HeroDev} alt="" />
        </div>
      </div>
      <div className="paraAbout" id="about">
        <div className="aptext">
          <h2>Hi, I’m Utkarsh. Nice to see you here.</h2>
          <p>
          For more than four years, I have been forging a path as a Developer, working remotely for esteemed agencies and collaborating with talented individuals to create cutting-edge digital products for business and consumer use. I approach each project with quiet confidence, fueled by my innate curiosity and unrelenting commitment to sharpening my skills through each development challenge.
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
            <h3>Frontend Developement</h3>
            <p>
            I enjoy coding from scratch and bringing ideas to life in the browser.
            </p>
            <h4>Languages I speak:</h4>
            <p>HTML, CSS, JavaScript, Bootstrap, jQuery, ReactJS</p>
            <h4>Dev Tools:</h4>
            <span>VS Code </span>
            <span>Live Server</span>
            <span>Xampp</span>
            <span>Chrome</span>
            <span>Github</span>
            <span>Linux </span>
          </div>
          <div className="ty">
            <div className="tyimgLogo">
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M28.5 40v-3h6q1.05 0 1.775-.725Q37 35.55 37 34.5v-5q0-1.85 1.125-3.3 1.125-1.45 2.875-2v-.4q-1.75-.5-2.875-1.975T37 18.5v-5q0-1.05-.725-1.775Q35.55 11 34.5 11h-6V8h6q2.3 0 3.9 1.6t1.6 3.9v5q0 1.05.725 1.775Q41.45 21 42.5 21H44v6h-1.5q-1.05 0-1.775.725Q40 28.45 40 29.5v5q0 2.3-1.6 3.9T34.5 40Zm-15 0q-2.3 0-3.9-1.6T8 34.5v-5q0-1.05-.725-1.775Q6.55 27 5.5 27H4v-6h1.5q1.05 0 1.775-.725Q8 19.55 8 18.5v-5q0-2.3 1.6-3.9T13.5 8h6v3h-6q-1.05 0-1.775.725Q11 12.45 11 13.5v5q0 1.85-1.125 3.325T7 23.8v.4q1.75.55 2.875 2T11 29.5v5q0 1.05.725 1.775Q12.45 37 13.5 37h6v3Z" />
              </svg>
            </div>
            <h3>Backend Development</h3>
            <p>
            Building robust and scalable backends for modern Softwares.
            </p>
            <h4>Languages I speak:</h4>
            <p>Python, PHP, Javascript, C Programming, DBMS</p>
            <h4>Dev Tools:</h4>
            <span>Vs Code</span>
            <span>Microsoft Azure</span>
            <span>AWS</span>
            <span>Xampp</span>
            <span>MySql</span>
            <span>Mongodb</span>
          </div>
          <div className="ty">
            <div className="tyimgLogo">
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M28.5 40v-3h6q1.05 0 1.775-.725Q37 35.55 37 34.5v-5q0-1.85 1.125-3.3 1.125-1.45 2.875-2v-.4q-1.75-.5-2.875-1.975T37 18.5v-5q0-1.05-.725-1.775Q35.55 11 34.5 11h-6V8h6q2.3 0 3.9 1.6t1.6 3.9v5q0 1.05.725 1.775Q41.45 21 42.5 21H44v6h-1.5q-1.05 0-1.775.725Q40 28.45 40 29.5v5q0 2.3-1.6 3.9T34.5 40Zm-15 0q-2.3 0-3.9-1.6T8 34.5v-5q0-1.05-.725-1.775Q6.55 27 5.5 27H4v-6h1.5q1.05 0 1.775-.725Q8 19.55 8 18.5v-5q0-2.3 1.6-3.9T13.5 8h6v3h-6q-1.05 0-1.775.725Q11 12.45 11 13.5v5q0 1.85-1.125 3.325T7 23.8v.4q1.75.55 2.875 2T11 29.5v5q0 1.05.725 1.775Q12.45 37 13.5 37h6v3Z" />
              </svg>
            </div>
            <h3>Other Skills</h3>
            <p>
            Expert-level skills and a passion for excellence in every sector.
            </p>
            <h4>I can do:</h4>
            <p>Digital Marketing, Video editing, Graphics Designing, Blogging, Content Creator</p>
            <h4>Tools:</h4>
            <span>Google</span>
            <span>Elementor</span>
            <span>Video editor</span>
            <span>Canva</span>
            <span>Instagram</span>
            <span>Wordpress</span>
          </div>
        </div>
      </div>
      {/* =====================================  Section for projects ===================================== */}
      <div className="projects">
        <h2>My Recent Projects</h2>
        <p>
          Here are a few past design projects I've worked on. Want for Yourself?{" "}
          <a href="mailto:myutkarshverma@gmail.com"> Email me</a>.
        </p>
        <div className="tyWorks2">
          <div className="ty1">
            <div className="ty1Direct">
              <img src={fateai} alt="" />
            </div>
            <div className="ty1Hover">
              <p>
                FateAI - THE LARGEST AI TOOLS DIRECTORY
              </p>
              <div>
                <a target="__blank" href="https://github.com/uvutkarshverma/fateai" className="btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="ty1">
            <div className="ty1Direct">
              <img src={food} alt="" />
            </div>
            <div className="ty1Hover">
              <p>
              Complete Food Ordering Website with login, cart, dashboard and much more.
              </p>
              <div>
                <a target="__blank" href="https://github.com/uvutkarshverma/food-ordering" className="btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="ty1">
            <div className="ty1Direct">
              <img src={qnastop} alt="" />
            </div>
            <div className="ty1Hover">
              <p>
              Complete Blog Website Using Php Language
              </p>
              <div>
                <a target="__blank" href="https://github.com/uvutkarshverma/qnastop" className="btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
        
        
        </div>
        <div className="fmog">
          <a target="__blank" href="https://github.com/uvutkarshverma" className="btn fmog">
            Find More on Github
          </a>
        </div>
      </div>



      {/*============================  section start for statup listng =====================================*/}



      <div className="startupMain">
        <div className="startupContent">
          <div className="startupCtext">
            <h2>My Startup Projects</h2>
            <p>
            I have a passion for digital products and have used countless web and mobile apps across various industries and verticals over the years. This sparked my interest in designing and building my own, and I saw it as a fun challenge that I was eager to take on.
            </p>
          </div>

          <div className="startupCard">

            <div className="scard">
              <div>
                <img src={Jug} alt="" />
              </div>
              <p>
              Innovative digital solutions for modern businesses.
              </p>
              <a href="https://justunitedgroup.co/" target="_blank">
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
                <h3>Fateai.xyz</h3>
              </div>
              <p>
              THE LARGEST AI TOOLS DIRECTORY.
              </p>
              <a href="https://fateai.xyz/" target="__blank">
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
              <h3>The Coder Utkarsh</h3>
              </div>
              <p>
              Accelerating your learning with real-world examples and hands-on demonstrations/
              </p>
              <a href="https://youtube.com/@thecoderutkarsh/" target="__blank">
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



      <hr className="line" />
      {/* Logo size image will br 150 width 100 px heigtht fixed width max 300 */}
      <div className="companydetail">
        <div className="cddetail">
          <h2>I'm proud to have Worked with some Awesome Companies:</h2>
        </div>
        <div className="companylist">
          <div className="companyitem">
            <img src={Anumak} alt="" />
          </div>
          <div className="companyitem">
            <img src={ayodhyamahotsav} alt="" />
          </div>
          <div className="companyitem">
            <h3>UrbanFMS.com</h3>
          </div>
          <div className="companyitem">
            <img src={Nuvo} alt="" />
          </div>
          <div className="companyitem">
            <img src={srsfashion} alt="" />
          </div>
          <div className="companyitem">
            <h3>Voicet.studio</h3>
          </div>

        </div>
      </div>


      <div className="contactCard">
        <h2>Interested in collaborating with me?</h2>
        <h3>I’m always open to discussing Full Stack Development or partnership opportunities.</h3>
        <div className="contactCardbtn"><a target="__blank" href="https://linkedin.com/in/uvutkarshverma" className="btn">Start a Coversation</a></div>
      </div>


      <div className="testimo">
        <h2>Testimonials</h2>
        <p>"How People Describing me? Let`s Have a Look!"</p>
        <div className="testimonial">
          <div className="slide-row" id="slide" >


            <div class="slide-col slide-active">
              {<img src={NuvoOwner} alt="" />}
              <h3>"I had the pleasure of working with Utkarsh Verma on a recent web development project, and I couldn't be happier with the results. He demonstrated a high level of technical expertise and was able to deliver a seamless and intuitive web application that exceeded my expectations. I would highly recommend Utkarsh to anyone looking for a skilled and dedicated full stack Developer. Thank you for your exceptional work!"</h3>
              <p>Pooja (Rai) Telavane</p>
              <span>Founder of NUVO Consultancy</span>
            </div>

          </div>
          <div className="indicator">
            <span to="" className="indibtn indibtn-active" ></span>
            <span to="" className="indibtn " ></span>


          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;


