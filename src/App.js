import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import './App.css'
import img1 from './assets/images/desktop/image-deep-earth.jpg'
import img2 from './assets/images/desktop/image-night-arcade.jpg'
import img3 from './assets/images/desktop/image-soccer-team.jpg'
import img4 from './assets/images/desktop/image-grid.jpg'
import mobileImg1 from './assets/images/mobile/image-deep-earth.jpg'
import mobileImg2 from './assets/images/mobile/image-night-arcade.jpg'
import mobileImg3 from './assets/images/mobile/image-soccer-team.jpg'
import mobileImg4 from './assets/images/mobile/image-grid.jpg'
import img5 from './assets/images/desktop/image-from-above.jpg'
import img6 from './assets/images/desktop/image-pocket-borealis.jpg'
import img7 from './assets/images/desktop/image-curiosity.jpg'
import img8 from './assets/images/desktop/image-fisheye.jpg'
import mobileImg5 from './assets/images/mobile/image-from-above.jpg'
import mobileImg6 from './assets/images/mobile/image-pocket-borealis.jpg'
import mobileImg7 from './assets/images/mobile/image-curiosity.jpg'
import mobileImg8 from './assets/images/mobile/image-fisheye.jpg'
import fb from './assets/images/icon-facebook.svg';
import insta from './assets/images/icon-instagram.svg';
import pinterest from './assets/images/icon-pinterest.svg';
import twitter from './assets/images/icon-twitter.svg';
import {useIntersection} from 'react-use'
import Aos from 'aos'
import 'aos/dist/aos.css';


function App() {
 
  useEffect(() => {
    Aos.init({duration:1000});
    console.log(window.innerWidth);

  }, [])

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);


  const firstIntersection = useIntersection(section1Ref,{
    root:null,
    rootMargin:"20px",
    threshold:1
  })
  const secondIntersection = useIntersection(section2Ref,{
    root:null,
    rootMargin:"20px",
    threshold:1
  })
  const ThirdIntersection = useIntersection(section3Ref,{
    root:null,
    rootMargin:"20px",
    threshold:1
  })
  const [drawerVisible, setDrawerVisible] = useState(false)
  return (
    <div className="App" style={{maxWidth:window.innerWidth}}>
      {drawerVisible && (
      <div className="drawer">
        <div className="row">
        <div  className="logo" />
        <div className="close" onClick={() =>setDrawerVisible(false)}></div>
        </div>
        <div className="col1">
          <span className="drawer-option">About</span>
          <span className="drawer-option">Careers</span>
          <span className="drawer-option">Events</span>
          <span className="drawer-option">Products</span>
          <span className="drawer-option">Support</span>
        </div>
      </div>)}
      <div className="header"  style={{maxWidth:window.innerWidth }}>
        <div className="nav-bar" style={{maxWidth:window.innerWidth }}>
          <div  className="logo" />
          {window.innerWidth > 600? (
          <div className="navbar-options">
            <a className="navbar-items" href="#">About</a>
            <a className="navbar-items" href="#">Careers</a>
            <a className="navbar-items" href="#">Events</a>
            <a className="navbar-items" href="#">Products</a>
            <a className="navbar-items" href="#">Support</a>
          </div>):(
            <div className="menu" onClick={() =>setDrawerVisible(true)}/>
          )}
        </div>
        <div className={secondIntersection && secondIntersection.intersectionRatio<1?"box-no-anim":"box"} ref={section2Ref}>
          <p className={secondIntersection && secondIntersection.intersectionRatio<1?"box-title-no-anim":"box-title"} ref={section2Ref}>IMMERSIVE EXPERIENCES THAT DELIVER</p>
        </div>
      </div>
      <div className="section1" style={{maxWidth:window.innerWidth }}>
        <div  className="image-interactive"></div>
        <div className="description"  >
          <span className="description-title"> THE LEADER IN INTERACTIVE VR</span>
          <p className="details">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
      </div>
      <div className="section2" style={{maxWidth:window.innerWidth }}>
        <div className="section-header" style={{maxWidth:window.innerWidth * 0.85}}>
          <span className="section-title">OUR CREATIONS</span>
          <div className="section-button">
            <span className="button-text">SEE ALL</span>
          </div>
        </div>
        <div className="section-row" style={{maxWidth:window.innerWidth * 0.85}}>
          <div className="options" data-aos={window.innerWidth < 600?"fade-left":"fade-up"} style={{maxWidth:window.innerWidth * 0.85 ,backgroundImage: `url(${window.innerWidth < 600?mobileImg1:img1})` }}>
            <span className="option-text">DEEP EARTH</span>
          </div>
          <div className="options" data-aos={window.innerWidth < 600?"fade-right":"fade-up"} style={{ backgroundImage: `url(${window.innerWidth < 600?mobileImg2:img2})` }}>
            <span className="option-text">NIGHT ARCADE</span>
          </div>
          <div className="options" data-aos={window.innerWidth < 600?"fade-left":"fade-up"} style={{ backgroundImage: `url(${window.innerWidth < 600?mobileImg3:img3})` }}>
            <span className="option-text">SOCCER TEAM VR</span>
          </div>
          <div className="options" data-aos={window.innerWidth < 600?"fade-right":"fade-up"} style={{ backgroundImage: `url(${window.innerWidth < 600?mobileImg4:img4})` }}>
            <span className="option-text">THE GRID</span>
          </div>
         
        </div>
      </div>
      <div className={window.innerWidth<600?"section2":"section3"} style={{maxWidth:window.innerWidth,marginTop:window.innerWidth<600?"-32vh":0 }}>
        <div className={window.innerWidth<600?"section-row":"section3-row"} style={{maxWidth:window.innerWidth*0.85 }}>
        <div className="options" data-aos={window.innerWidth < 600?"fade-left":"fade-up"}style={{ backgroundImage: `url(${window.innerWidth < 600?mobileImg5:img5})` }}>
          <span className="option-text">FROM UP ABOVE VR</span>
        </div>
        <div className="options" data-aos={window.innerWidth < 600?"fade-right":"fade-up"} style={{ backgroundImage: `url(${window.innerWidth < 600?mobileImg6:img6})` }}>
          <span className="option-text">POCKET BOREALIS</span>
        </div>
        <div className="options" data-aos={window.innerWidth < 600?"fade-left":"fade-up"} style={{ backgroundImage: `url(${window.innerWidth < 600?mobileImg7:img7})` }}>
          <span className="option-text">THE CURIOSITY</span>
        </div>
        <div className="options" data-aos={window.innerWidth < 600?"fade-right":"fade-up"} style={{ backgroundImage: `url(${window.innerWidth < 600?mobileImg8:img8})` }}>
          <span className="option-text">MAKE IT FISH EYE</span>
        </div>
        <div className="button">
            <span className="button-text">SEE ALL</span>
          </div>
        </div>
      </div>
      <div className="footer" style={{maxWidth:window.innerWidth }}>
        <div className="first-row" style={{maxWidth:window.innerWidth }}>
          <div  className="logo" />
          {window.innerWidth>600 && (
          <div className="social-media-row">
            <img src={fb} alt="" className="social-icons" />
            <img src={twitter} alt="" className="social-icons" />
            <img src={pinterest} alt="" className="social-icons" />
            <img src={insta} alt="" className="social-icons" />
          </div>)}
        </div>
        <div className="second-row">
          <div className="menu-options">
            <a href="" className="menu-option">About</a>
            <a href="" className="menu-option">Careers</a>
            <a href="" className="menu-option">Events</a>
            <a href="" className="menu-option">Products</a>
            <a href="" className="menu-option">Support</a>
          </div>
          {window.innerWidth>600 && (<span className="right">2021 Loopstudio.All rights reserved.</span>)}
        </div>
        {window.innerWidth<600 && (
          <div className="social-media-row">
            <img src={fb} alt="" className="social-icons" />
            <img src={twitter} alt="" className="social-icons" />
            <img src={pinterest} alt="" className="social-icons" />
            <img src={insta} alt="" className="social-icons" />
          </div>)}
          {window.innerWidth<600 && (<span className="right">2021 Loopstudio.All rights reserved.</span>)}

      </div>
    </div>
  );
}

export default App;
