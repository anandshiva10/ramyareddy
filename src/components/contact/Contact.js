import React, { useRef,useState,useEffect } from 'react';
// import emailjs from 'emailjs-com';
import "./contact.css"
const Contact = () => {

    const formRef= useRef();
    // const [done, setDone] = useState(false);
    const [isActive,setIsActive] = useState(false);
     function handleSubmit(e) {
        e.preventDefault();
        
    //     emailjs.sendForm('service_v8vo86p', 'template_lmj9lba', formRef.current, 'user_cgOv3d7B8BD2pHgcOXx82')
    //   .then((result) => {
    //       console.log(result.text);
    //       // toggleToast();
    //       setIsActive(!isActive)
         
    //   }, (error) => {
    //       console.log(error.text);
    //   });

      e.target.reset();
    }

  
  useEffect(() => {
    if(isActive){
      setTimeout(()=>{
        setIsActive(!isActive)
      },5000)
    }
  },[isActive] );


  return (
    <div className='contact section' id="contact">
         <div className='section-heading contact-background'>
        Contact us
    </div>
    <p  className='services-header '>Have a question? Feel free to reach us out anytime.</p>
       <div className='contact_container'>
       <div class="contactInfo">
                        <a href="https://www.google.com/maps/place/Hyderabad,+Telangana/">
                        <div class="box">
                            <div class="icon"><i class="fa-sharp fa-solid fa-location-dot"></i></div>
                            <div class="text">
                                <p class="text-title">Address</p>
                                <p class="text-info">USA</p>
                            </div>
                        </div>
                    </a>
                        <a href="tel:9676264664">
                        <div class="box">
                            <div class="icon"><i class="fa-sharp fa-solid fa-phone"></i></div>
                            <div class="text">
                                <p class="text-title">Phone</p>
                                <p class="text-info">+1 912345679</p>
                            </div>
                        </div>
                    </a>
                        <a href="mailto:info@ramyareddy.com">
                        <div class="box">
                            <div class="icon"><i class="fa-sharp fa-solid fa-envelope"></i></div>
                            <div class="text">
                                <p class="text-title">Email</p>
                                <p class="text-info">info@ramyareddy.com</p>
                            </div>
                        </div>
                    </a>
                    </div>
                    <div class="contactForm" data-aos="fade-left">
                        <form  id="contact-form" onsubmit="return false" class="form">
                            {/* <!-- <p class="sub-heading" style="font-size: 20px;color: black;">Send us a message</p> --> */}
                            <div class="inputBox">
                                <input type="text" id="name" name="" required="required" />
                                <span>Full Name</span>
                            </div>
                            <div class="inputBox">
                                <input type="text" id="number" name="" required="required" />
                                <span>Phone no.</span>
                            </div>
                            <div class="inputBox">
                                <input type="text" id="email" name="" required="required" />
                                <span>Email</span>
                            </div>
                            <div class="inputBox">
                                <textarea required="required" id="message" rows="5"></textarea>
                                <span>Type your message here....</span>
                            </div>
                            <div class="inputBox">
                                <input type="submit" value="Send" onclick="sendMail()" />
                                
                            </div>
                        </form>
                    </div>
       </div>
    </div>

  )
}

export default Contact