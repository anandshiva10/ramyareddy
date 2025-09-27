import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import { useState } from 'react';
import Homepage from './components/homepage/Homepage';
import About from './components/about/About';
import Services from './components/services/Services';

import ReactImageGallery from './components/gallery2/ReactImageGallery';
import Contact from './components/contact/Contact';
function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Homepage/>
      <About/>
      <Services/> 
      {/* <Gallery/> */}
     <ReactImageGallery/>
     <Contact/>
    </div>
  );
}

export default App;
