import React from 'react'
import aboutpic from './assets/AboutPic.jpg'
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Home.css'


function Home() {

  const navigate = useNavigate();

  function redirectsShop(){
    const path = '/shop'; 
    navigate(path);
  }


  return (
    <div className='Home'>

      <div className='picture'>
      </div>

      

      <div className='mainPara'>
        <h1>The Best <span className='color-Text'>SuperHeros Figures</span> in the World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <button className='home-button' onClick={redirectsShop}>Find Your Figure</button>
      </div>

      <div className='about'>

      <div className='aboutTop'>
          <span>About DC-Figures</span>
          <h1 className='aboutHead'>Our <span>Goal</span> is Simple: <br/>Provide the Best DC <br/> Figures in the <span>Entire World.</span> </h1>
          <p className='aboutPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
      </div>

      <div className='aboutBottom'>

          <LazyLoadImage effect='blur' src={aboutpic} className='aboutPic'  alt='aboutPic'/>

        <div className='aboutBottomRight'>
          <span>Made By Us, Specially For You.</span>
          <h1 className='aboutBottomHead'>Make your Dream come true with Cool DC Figures</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non pro.</p>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Home
