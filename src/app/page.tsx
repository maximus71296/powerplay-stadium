import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Facilities from './components/Facilities';
import AboutSlider from './components/AboutSlider';
import Training from './components/Training';
import Gallery from './components/Gallery';
import CoachArena from './components/CoachArena';
import AboutSlider2 from './components/AboutSlider2';
import Footer from './components/Footer';

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <AboutSlider />
      <Facilities />
      <Training />
      <Gallery />
      <AboutSlider2 />
      <CoachArena />
      <Footer />
    </div>
  )
}

export default page
