import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';
import gsap from 'gsap';
import '../InteractiveEffects.css';
import './Hero.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const fullText = 'Daksh Nautiyal';
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);
  const floatingRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Only animate buttons, NOT the title
    gsap.fromTo(buttonsRef.current?.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.5 }
    );

    // Floating animation on floating card
    gsap.to(floatingRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Mouse follow effect
    const handleMouseMove = (e) => {
      if (floatingRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        gsap.to(floatingRef.current, {
          x: x,
          y: y,
          duration: 0.5,
          ease: 'power1.out'
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="stars"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title" ref={titleRef}>
              <span className="text-animated">{displayedText}</span>
              {!isTypingDone && <span className="cursor">|</span>}
            </h1>
            <p className="hero-subtitle">B.Tech CSE Student | Aspiring Software Engineer | Tech Enthusiast</p>
            <p className="hero-description">Creating stunning digital experiences with cutting-edge technology</p>

            <div className="hero-buttons" ref={buttonsRef}>
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>

            <div className="social-links">
              <a href="https://github.com/daksh88" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/dakshnautiyal/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/dakshnautiyal1/" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="floating-card" ref={floatingRef}>
              <img src={`${process.env.PUBLIC_URL}/assets/images/1.jpeg`} alt="Creative Developer" className="floating-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <span>Scroll to explore</span>
        <HiChevronDown className="chevron" />
      </div>
    </section>
  );
};

export default Hero;
