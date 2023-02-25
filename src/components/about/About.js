import React, { useEffect, useState } from 'react'
import ImageSlider from 'react-simple-image-slider';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';
import img6 from '../../assets/images/6.jpg';
import img7 from '../../assets/images/7.jpg';
import './about.css'
function About() {
    const images = [
        { url: img1 },
        { url: img2},
        { url: img3 },
        { url: img4 },
        { url: img5 },
        { url: img6 },
        { url: img7 },
      ];
      // const [width, setWidth] = useState(window.innerWidth);
      // const [frameWidth, setFrameWidth] = useState(500)
      // const [frameHeight, setFrameHeight] = useState(333)
      // function handleResize() {
      //   setWidth(window.innerWidth);

      //   if(width>1000){
      //     setFrameWidth(500,()=>console.log(setFrameWidth))
      //     setFrameHeight(333,()=>console.log(setFrameHeight))
      //   }
      //   else if (width>500){
      //     setFrameWidth(450,()=>console.log(setFrameWidth))
      //     setFrameHeight(300,()=>console.log(setFrameHeight))
      //   }
      //   else{
      //     setFrameWidth(300,()=>console.log(setFrameWidth))
      //     setFrameHeight(200,()=>console.log(setFrameHeight))
      //   }     
      //   // console.log(width)
      // }
      // window.addEventListener('resize', handleResize);

      


  return (

             <div className='about section'  id='about'>
            <div className='section-heading about-background'>About Me</div>
            <div className='about-content'>
            <div className='image-frame'>
      <ImageSlider
        width={450}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={1}
        loop={true}
        autoPlay={true}
      />
      </div>
      <div className='about-info'>
    <p>My name is Ramya Reddy, and I'm a passionate photographer with a keen eye for detail and a love for capturing life's precious moments.</p>
    <p>&nbsp; &nbsp; I have always been fascinated by the power of photography to tell stories and evoke emotions. From the time I was a child, I would always be found behind the camera, capturing images of my friends and family, and the beauty of the world around me. As I grew older, my zeal for photography only grew stronger, and I began to pursue it as a passion along with my profession as a software engineer.</p>
    <p>&nbsp; &nbsp;Event photography is my specialty, and I have experience shooting a wide range of events, from weddings and birthday parties to corporate events and cultural festivals. My goal as a photographer is to capture the atmosphere and energy of the event, and to create images that tell a story and evoke emotion.</p>
    <p>&nbsp; &nbsp; I approach each project with a personalized touch, taking the time to understand your unique vision and requirements. Whether you're looking for candid shots or posed portraits, I am committed to working closely with you to bring your ideas to life.</p>
    <p>&nbsp;&nbsp; Thank you for taking the time to visit my website. I invite you to explore my portfolio and to contact me to discuss your next event. Let's work together to capture memories that will last a lifetime!</p> 
     <p className='signature'>-Ramya Reddy</p>
      </div>
            </div>
        </div>

  )
}

export default About