import { useEffect, useState } from "react";
import AboutSection from "./components/about/aboutSection";
import ContactSection from "./components/contect/contactSection";
import HeaderSection from "./components/header/headerSection";
import HomeSection from "./components/home/homeSection";
import ProjectSection from "./components/work/WorkSection";
import ExpertiseSection from "./components/expertise/expertiseSection";
import Certification from "./components/certificate/certificateSection";
import Footer from "./components/footer/footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <HeaderSection />
      <HomeSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectSection />
      <Certification />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
