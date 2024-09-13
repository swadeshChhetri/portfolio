import { useEffect, useState } from 'react'
import AboutSection from './component/about/aboutSection';
import ContactSection from './component/contect/contactSection';
import HeaderSection from './component/header/headerSection';
import HomeSection from './component/home/homeSection';
import ProjectSection from './component/work/WorkSection';
import ExpertiseSection from './component/expertise/expertiseSection';
import Certification from './component/certificate/certificateSection';
import Footer from './component/footer/footer';
import Aos from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
   Aos.init();
  },[])
  

  return (
    <>
    <HeaderSection/>
    <HomeSection/>
    <AboutSection/>
    <ExpertiseSection/>
    <ProjectSection/>
    <Certification/>
    <ContactSection/>
    <Footer/>
    
    </>
  )
}

export default App;
