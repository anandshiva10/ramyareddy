import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import "./navbar.css"
import logo from '../../assets/images/logo.png'
import logowhite from '../../assets/images/logoa.png'
const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
  
      console.log(active)

  }, [active])
  
  window.onscroll = function() {
    if(document.documentElement.scrollTop < 600){
        setActive('home')
    }
    else if(document.documentElement.scrollTop >= 600 && document.documentElement.scrollTop<1500){
        setActive('about')
    }
    else if(document.documentElement.scrollTop >= 1500 && document.documentElement.scrollTop<2600){
        setActive('services')
    }
    else if(document.documentElement.scrollTop >= 2600 ){
        setActive('gallery')
    }
  }

  return (
    <nav className={active=='home' ? 'NavbarItems darkBackground' : 'NavbarItems whiteBackground'}>
    <div className='navbar-logo'>{active=='home' ?  <img src={logowhite}/>: <img src={logo} />}</div>

    <div className='menu-icons' onClick={()=>{setClicked(!clicked)}}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>

    <ul className={active=='home' ? (clicked ? 'nav-menu active  darkBackground' : 'nav-menu') : (clicked ? 'nav-menu active  whiteBackground' : 'nav-menu') }>
    {
        MenuItems.map((item,index)=>{
            return(
                <li key={index}>
                    <a className={active==item.tag ? (active=='home' ? item.cName +' tab-dark' : item.cName +' tab') : item.cName}  href={item.url} onClick={()=>{setActive(item.tag)}}>
                        {item.title}
                    </a>
                </li>
            )
        })
    }
    </ul>
  </nav>
  )
}

export default Navbar