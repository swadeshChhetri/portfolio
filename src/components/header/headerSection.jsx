import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-scroll';

const HeaderSection = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <navbar className='navBar'>
      <div className='logo-container'>
      <img src="img/port.jpg" alt="logo" className='logo' />
      </div>
      <div className="desktopMenu">
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem nav-link">Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem nav-link">About</Link>
        <Link activeClass='active' to='expertises' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem nav-link">Expertise</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem nav-link">Projects</Link>
      </div>
 
      <div>
      <button className="desktopMenuBtn" onClick={() => document.getElementById('contact').scrollIntoView()}>
         Contact
      </button>
      </div>
      

      {/* Mobile menu toggler */}
      <span><i className="bi bi-list mobMenu" onClick={() => setShowMenu(!showMenu)} ></i></span>

      {/* Mobile menu */}
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='expertises' spy={true}smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Expertise</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>

      </div>
    </navbar>
  );
};

export default HeaderSection;