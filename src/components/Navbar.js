import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">DN</span>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">
            Skills
          </button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">
            Experience
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            Projects
          </button>
          <button onClick={() => scrollToSection('gallery')} className="nav-link">
            Gallery
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </button>
        </div>

        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
