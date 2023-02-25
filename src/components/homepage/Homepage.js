import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import './homepage.css'
import img from '../../assets/images/logo2.png'
export default function Homepage() {
  const images = [
    { url: img },
    { url: img },
    { url: img },
    { url: img },
    { url: img },
    { url: img },
    { url: img },
  ];
  return (
    
    <div className='homepage section'>
      <div className='content'>
        {/* <div className='home-logo'>
       <img src={img}/>
       </div> */}
       <div className='hero-content'>
       <div className='sub-heading'>BIRTHDAYS, WEDDING & PARTIES</div>
       <div className='heading'><q>One Frame at a Time.</q></div>
       <div className='sub-heading-message'>Welcome to my photography portfolio! I am a passionate photographer with a focus on Event photography. Take a moment to explore my portfolio and see some of my best work.</div>
       <div className='buttons'>
       <a href='#gallery'><button class="button button--ujarak button--border-medium button--round-s button--text-thick" >See my Work</button></a>
       <button class="button button--ujarak button--border-medium button--round-s button--text-thick">Work With me</button>
       </div>
       </div>
      </div>
      </div>

  )
}
