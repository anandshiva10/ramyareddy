import React, { useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './gallery.css'
// import {images} from '../gallery/images'

const images=["https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/15579683/pexels-photo-15579683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/6405799/pexels-photo-6405799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/1066284/pexels-photo-1066284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
"https://images.pexels.com/photos/249211/pexels-photo-249211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]

const ReactImageGallery = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)
  
    const handleOpenModal = (index) => {
      setSlideNumber(index)
      setOpenModal(true)
    }
  
    // Close Modal
    const handleCloseModal = () => {
      setOpenModal(false)
    }
  
    // Previous Image
    const prevSlide = () => {
      slideNumber === 0 
      ? setSlideNumber( images.length -1 ) 
      : setSlideNumber( slideNumber - 1 )
    }
  
    // Next Image  
    const nextSlide = () => {
      slideNumber + 1 === images.length 
      ? setSlideNumber(0) 
      : setSlideNumber(slideNumber + 1)
    }
  return (
    <div className='gallery section' id='gallery'>
    <div className='section-heading gallery-background'>
        Gallery
    </div>
    <div className='gallery-container'>
{openModal && 
        <div className='sliderWrap'>
          <i className="fa-solid fa-circle-xmark btnClose" onClick={handleCloseModal} ></i>
         <i className="fa-solid fa-circle-chevron-left btnPrev" onClick={prevSlide}></i>
         <i class="fa-solid fa-circle-chevron-right btnNext"  onClick={nextSlide}></i>
          <div className='fullScreenImage'>
            <img src={images[slideNumber]} alt='' />
          </div>
        </div>
      }
    <ResponsiveMasonry
    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
>
    <Masonry gutter='20px'>
        {images.map((image, i) => (
            <img
                key={i}
                src={image}
                style={{width: "100%", display: "block"}}
                alt=""
                onClick={ () => handleOpenModal(i) }
            />
        ))}
    </Masonry>
</ResponsiveMasonry>
</div>
</ div>
  )
}

export default ReactImageGallery