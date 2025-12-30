import React, { useRef, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import '../InteractiveEffects.css';
import './Gallery.css';

const Gallery = () => {
  const ref = useScrollAnimation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const publicUrl = process.env.PUBLIC_URL;

  const galleryItems = [
    {
      id: 1,
      image: `${publicUrl}/assets/images/IMG-20250906-WA0014.jpg`,
      title: 'Team Leadership',
      description: 'Leading and mentoring teams with vision'
    },
    {
      id: 2,
      image: `${publicUrl}/assets/images/IMG-20250906-WA0023.jpg`,
      title: 'Professional Growth',
      description: 'Continuous development and learning journey'
    },
    {
      id: 3,
      image: `${publicUrl}/assets/images/IMG-20250906-WA0025.jpg`,
      title: 'Collaboration',
      description: 'Working seamlessly with diverse teams'
    },
    {
      id: 4,
      image: `${publicUrl}/assets/images/IMG-20250906-WA0030.jpg`,
      title: 'Leadership Excellence',
      description: 'Driving initiatives and inspiring others'
    },
    {
      id: 5,
      image: `${publicUrl}/assets/images/IMG-20250906-WA0031.jpg`,
      title: 'Team Recognition',
      description: 'Achievements and milestones celebrated'
    },
    {
      id: 6,
      image: `${publicUrl}/assets/images/IMG-20250906-WA0034.jpg`,
      title: 'Professional Network',
      description: 'Building meaningful connections worldwide'
    },
    {
      id: 7,
      image: `${publicUrl}/assets/images/IMG-20250906-WA0036.jpg`,
      title: 'Operational Excellence',
      description: 'Managing projects and delivering results'
    },
    {
      id: 8,
      image: `${publicUrl}/assets/images/WhatsApp Image 2025-09-06 at 12.07.37_ba86bbd2.jpg`,
      title: 'Team Bond',
      description: 'Strong relationships built through leadership'
    },
    {
      id: 9,
      image: `${publicUrl}/assets/images/IMG-20250906-WA0011.jpg`,
      title: 'Leadership Impact',
      description: 'Creating positive change in teams'
    },
    {
      id: 10,
      image: `${publicUrl}/assets/images/IMG-20250906-WA0020.jpg`,
      title: 'Professional Achievement',
      description: 'Recognized for excellence and dedication'
    },
    {
      id: 11,
      image: `${publicUrl}/assets/images/IMG-20250906-WA0022.jpg`,
      title: 'Team Excellence',
      description: 'Building high-performing teams'
    },
    {
      id: 12,
      image: `${publicUrl}/assets/images/IMG-20250906-WA0021.jpg`,
      title: 'Leadership Legacy',
      description: 'Mentoring and empowering future leaders'
    }
  ];

  return (
    <section id="gallery" className="section gallery" ref={ref}>
      <div style={{ width: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '2rem' }}>
          <h2 className="section-title gradient-text-animate" data-animate>
            My Journey & Experiences
          </h2>
        </div>

        <div style={{ width: '100%' }}>
          <div className="gallery-container">
            <div className="scroll-hint">Scroll →</div>
            <div className="gallery-grid">
              {galleryItems.map((item, idx) => (
              <div
                className={`gallery-item interactive-card ${hoveredIndex === idx ? 'active' : ''}`}
                key={item.id}
              data-animate
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="gallery-image">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay"></div>
              </div>
              
              <div className="gallery-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}            </div>          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
