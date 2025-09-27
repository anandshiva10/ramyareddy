import { useState } from 'react'
import './gallery.css'
import {images} from './images'

const Gallery = () => {

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
    <div>

      {openModal && 
        <div className='sliderWrap'>
          <i className="fa-solid fa-circle-xmark btnClose" onClick={handleCloseModal} ></i>
         <i className="fa-solid fa-circle-chevron-left btnPrev" onClick={prevSlide}></i>
         <i class="fa-solid fa-circle-chevron-right btnNext"  onClick={nextSlide}></i>
          <div className='fullScreenImage'>
            <img src={images[slideNumber].img} alt='' />
          </div>
        </div>
      }

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {images.length}
      <br /><br /> */}

      <div className='galleryWrap'>
        {
          images && images.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Gallery