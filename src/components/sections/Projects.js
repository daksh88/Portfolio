import React, { useRef, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import '../InteractiveEffects.css';
import './Projects.css';

const Projects = () => {
  const ref = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      name: 'AI Agent for Company Invoices',
      description: 'Intelligent automation system that extracts and processes invoice data using AI. Handles document parsing, data extraction, and automated invoice processing with TypeScript runtime and SQLite database management.',
      tech: ['TypeScript', 'SQLite', 'Node.js'],
      liveLink: null,
      githubLink: 'https://github.com/daksh88/AI-Agent-for-Company-Invoices',
      image: '/assets/images/p1.jpg'
    },
    {
      name: 'Arithmetic Code Optimizer',
      description: 'Web application that analyzes and optimizes arithmetic expressions. Provides code optimization suggestions and performance improvements with an interactive UI for testing and visualization.',
      tech: ['Python', 'HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://code-optimizer-jalk.onrender.com',
      githubLink: 'https://github.com/daksh88/Code-Optimizer',
      image: '/assets/images/p2.jpg'
    },
    {
      name: 'Process Manager',
      description: 'Software engineering project for managing system processes and tasks. Features process monitoring, control, and management with a responsive interface and real-time updates.',
      tech: ['Python', 'HTML', 'CSS', 'JavaScript'],
      liveLink: null,
      githubLink: 'https://github.com/daksh88/Process-Manager',
      image: '/assets/images/p3.webp'
    },
    {
      name: 'Motion Gesture Volume Controller',
      description: 'Computer vision application that uses hand gesture recognition to control system volume. Implements real-time motion tracking and gesture detection for intuitive volume control.',
      tech: ['Python', 'OpenCV', 'Mediapipe'],
      liveLink: null,
      githubLink: 'https://github.com/daksh88/Motion-Gesture-Volume-Controller',
      image: '/assets/images/p4.jpg'
    },
    {
      name: '25-5 Clock (Pomodoro Timer)',
      description: 'Productivity timer application implementing the Pomodoro Technique with work/break intervals. Features session management, audio notifications, and clean minimalist interface design.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      liveLink: 'https://daksh88.github.io/25-5-Clock/',
      githubLink: 'https://github.com/daksh88/25-5-Clock',
      image: '/assets/images/p5.jpg'
    },
    {
      name: 'The Project Shunya (E-commerce)',
      description: 'Real client project for a complete e-commerce platform. Hybrid WordPress + custom HTML/CSS/JS implementation with product listings, Google Search Console integration, and SEO-optimized site mapping through Hostinger.',
      tech: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'SEO'],
      liveLink: 'https://theprojectshunya.com/',
      githubLink: null,
      image: '/assets/images/p6.jpg'
    }
  ];

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <h2 className="section-title gradient-text-animate" data-animate>Featured Projects</h2>
        <div className="projects-container">
          <div className="scroll-hint">Scroll →</div>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div 
                className={`project-card interactive-card ${hoveredIndex === idx ? 'active' : ''}`}
                key={idx} 
                data-animate
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`project-image ${hoveredIndex === idx ? 'glow' : ''}`}>
                  <img src={project.image} alt={project.name} className="project-img" />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <div className="project-links">
                        {project.liveLink && <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">View Live</a>}
                        {project.githubLink && <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="view-more-container" data-animate>
          <a href="https://github.com/daksh88" target="_blank" rel="noopener noreferrer" className="view-more-link">
            View More Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
