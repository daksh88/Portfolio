import React, { useRef } from 'react';
import { FaLaptopCode, FaPalette, FaBolt } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <h2 className="section-title" data-animate>About Me</h2>
        <div className="about-content">
          <div className="about-text" data-animate>
            <p className="lead">
              B.Tech CSE student at Graphic Era University with hands-on experience across both tech and management roles. I'm someone who enjoys building things whether that's a website, a team, or a system that works better than before.
            </p>
            <p>
              As a Web Development Intern, I handled end-to-end website development from UI design to backend integration while collaborating with real clients and teams. Beyond tech, I've led teams at AIESEC as Senior Manager in Business Development and Core Committee President, managing stakeholders, partnerships, and operations under real deadlines. I value ownership, consistency, and learning by doing.
            </p>
            <div className="about-stats">
              <div className="stat" data-animate>
                <h3>10+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="stat" data-animate>
                <h3>2+</h3>
                <p>Leadership Roles</p>
              </div>
              <div className="stat" data-animate>
                <h3>Tech & Business</h3>
                <p>Dual Expertise</p>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="feature-card" data-animate>
              <FaLaptopCode className="feature-icon" />
              <h3>End-to-End Development</h3>
              <p>From UI design to backend integration with real client collaboration</p>
            </div>
            <div className="feature-card" data-animate>
              <FaPalette className="feature-icon" />
              <h3>Leadership & Execution</h3>
              <p>Team management, stakeholder coordination, and operations handling</p>
            </div>
            <div className="feature-card" data-animate>
              <FaBolt className="feature-icon" />
              <h3>Building Systems</h3>
              <p>Creating products and processes that actually work under real pressure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
