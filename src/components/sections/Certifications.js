import React, { useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaFileDownload, FaCheckCircle } from 'react-icons/fa';
import '../InteractiveEffects.css';
import './Certifications.css';

const Certifications = () => {
  const ref = useScrollAnimation();

  const documents = [
    {
      id: 1,
      title: 'Letter of Recommendation',
      description: 'Professional recommendation from Digital Nomadians for Web Development Intern role',
      category: 'LOR',
      organization: 'Digital Nomadians',
      file: '/assets/files/LOR.pdf',
      icon: '📄',
      status: 'Available'
    },
    {
      id: 2,
      title: 'Letter of Experience',
      description: 'Official experience letter documenting internship at Digital Nomadians',
      category: 'LOE',
      organization: 'Digital Nomadians',
      file: '/assets/files/LOE.pdf',
      icon: '📋',
      status: 'Available'
    },
    {
      id: 3,
      title: 'Letter of Recommendation',
      description: 'Professional recommendation from AIESEC for Senior Manager roles and Event Management',
      category: 'LOR',
      organization: 'AIESEC in Dehradun',
      file: '/assets/files/Daksh Nautiyal _ LOR _AIESEC.pdf',
      icon: '📄',
      status: 'Available'
    },
    {
      id: 4,
      title: 'Letter of Experience',
      description: 'Comprehensive experience letter documenting complete journey and roles at AIESEC in Dehradun',
      category: 'LOE',
      organization: 'AIESEC in Dehradun',
      file: '/assets/files/Daksh Nautiyal LOE_AIESEC.pdf',
      icon: '📋',
      status: 'Available'
    }
  ];

  return (
    <section id="certifications" className="section certifications" ref={ref}>
      <div className="container">
        <h2 className="section-title gradient-text-animate" data-animate>
          Documents & Certifications
        </h2>
        
        <div className="docs-container">
          <div className="scroll-hint">Scroll →</div>
          <div className="docs-grid">
            {documents.map((doc, idx) => (
              <div 
                className="doc-card interactive-card" 
                key={doc.id}
                data-animate
              >
                <div className="doc-icon">{doc.icon}</div>
                
                <div className="doc-header">
                  <h3>{doc.title}</h3>
                  <p className="doc-organization">{doc.organization}</p>
                  <span className={`doc-badge ${doc.category.toLowerCase()}`}>
                    {doc.category}
                  </span>
                </div>

                <p className="doc-description">{doc.description}</p>

                <div className="doc-footer">
                  <span className="doc-status">
                    <FaCheckCircle /> {doc.status}
                  </span>
                  <a href={doc.file} className="doc-link" download>
                    <FaFileDownload /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="docs-info" data-animate>
          <div className="info-card">
            <h3>📌 How to Use</h3>
            <p>
              Download the documents above to view LORs, LOEs, and other certifications. 
              All documents are verified and can be shared with institutions or employers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
