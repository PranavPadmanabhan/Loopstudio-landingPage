import React, { useEffect, useLayoutEffect, useRef } from "react";
import './App.css'
import logo from './assets/images/logo.svg';
import img1 from './assets/images/desktop/image-deep-earth.jpg'
import img2 from './assets/images/desktop/image-night-arcade.jpg'
import img3 from './assets/images/desktop/image-soccer-team.jpg'
import img4 from './assets/images/desktop/image-grid.jpg'
import img5 from './assets/images/desktop/image-from-above.jpg'
import img6 from './assets/images/desktop/image-pocket-borealis.jpg'
import img7 from './assets/images/desktop/image-curiosity.jpg'
import img8 from './assets/images/desktop/image-fisheye.jpg'
import fb from './assets/images/icon-facebook.svg';
import insta from './assets/images/icon-instagram.svg';
import pinterest from './assets/images/icon-pinterest.svg';
import twitter from './assets/images/icon-twitter.svg';
import {useIntersection} from 'react-use'
import Aos from 'aos'
import 'aos/dist/aos.css';

function App() {
 
  useEffect(() => {
    Aos.init({duration:1000})
  }, [])

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);


  const firstIntersection = useIntersection(section1Ref,{
    root:null,
    rootMargin:"0px",
    threshold:1
  })
  const secondIntersection = useIntersection(section2Ref,{
    root:null,
    rootMargin:"50px",
    threshold:1
  })
  const ThirdIntersection = useIntersection(section3Ref,{
    root:null,
    rootMargin:"0px",
    threshold:1
  })
  return (
    <div className="App">
      <div className="header" >
        <div className="nav-bar">
          <img src={logo} alt="logo" className="logo" />
          <div className="navbar-options">
            <a className="navbar-items" href="#">About</a>
            <a className="navbar-items" href="#">Careers</a>
            <a className="navbar-items" href="#">Events</a>
            <a className="navbar-items" href="#">Products</a>
            <a className="navbar-items" href="#">Support</a>
          </div>
        </div>
        <div className={secondIntersection && secondIntersection.intersectionRatio<1?"box-no-anim":"box"} ref={section2Ref}>
          <p className={secondIntersection && secondIntersection.intersectionRatio<1?"box-title-no-anim":"box-title"} ref={section2Ref}>IMMERSIVE EXPERIENCES THAT DELIVER</p>
        </div>
      </div>
      <div className="section1" >
        <div className="image-interactive"></div>
        <div className={firstIntersection && firstIntersection.intersectionRatio<1?"description-no-anim":"description"} ref={section1Ref}>
          <span className="description-title"> THE LEADER IN INTERACTIVE VR</span>
          <p className="details">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
      </div>
      <div className="section2">
        <div className="section-header">
          <span className="section-title">OUR CREATIONS</span>
          <div className="section-button">
            <span className="button-text">SEE ALL</span>
          </div>
        </div>
        <div className="section-row">
          <div className="options" data-aos="fade-up" style={{ backgroundImage: `url(${img1})` }}>
            <span className="option-text">DEEP EARTH</span>
          </div>
          <div className="options" data-aos="fade-up" style={{ backgroundImage: `url(${img2})` }}>
            <span className="option-text">NIGHT ARCADE</span>
          </div>
          <div className="options" data-aos="fade-up" style={{ backgroundImage: `url(${img3})` }}>
            <span className="option-text">SOCCER TEAM VR</span>
          </div>
          <div className="options" data-aos="fade-up" style={{ backgroundImage: `url(${img4})` }}>
            <span className="option-text">THE GRID</span>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="section3-row">
        <div className="options" data-aos="fade-up" style={{ backgroundImage: `url(${img5})` }}>
          <span className="option-text">FROM UP ABOVE VR</span>
        </div>
        <div className="options" data-aos="fade-up" style={{ backgroundImage: `url(${img6})` }}>
          <span className="option-text">POCKET BOREALIS</span>
        </div>
        <div className="options" data-aos="fade-up" style={{ backgroundImage: `url(${img7})` }}>
          <span className="option-text">THE CURIOSITY</span>
        </div>
        <div className="options" data-aos="fade-up" style={{ backgroundImage: `url(${img8})` }}>
          <span className="option-text">MAKE IT FISH EYE</span>
        </div>
        </div>
      </div>
      <div className="footer">
        <div className="first-row" style={{marginTop:"1rem"}}>
          <img src={logo} alt="" className="footer-logo" />
          <div className="social-media-row">
            <img src={fb} alt="" className="social-icons" />
            <img src={twitter} alt="" className="social-icons" />
            <img src={pinterest} alt="" className="social-icons" />
            <img src={insta} alt="" className="social-icons" />
          </div>
        </div>
        <div className="second-row">
          <div className="menu-options">
            <a href="" className="menu-option">About</a>
            <a href="" className="menu-option">Careers</a>
            <a href="" className="menu-option">Events</a>
            <a href="" className="menu-option">Products</a>
            <a href="" className="menu-option">Support</a>
          </div>
          <span className="right">2021 Loopstudio.All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
