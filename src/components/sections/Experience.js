import React, { useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Experience.css';

const Experience = () => {
  const ref = useScrollAnimation();

  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'Digital Nomadians',
      date: '15 Jan - 15 Dec 2024',
      description: 'Built responsive websites for real clients using HTML, CSS, and JavaScript. Implemented version control with GitHub, optimized sites for SEO, integrated Google Search Console, created XML sitemaps, and worked with CMS platforms. All projects were delivered for active clients with complete end-to-end solutions.',
      skills: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'SEO', 'CMS', 'Google Search Console', 'XML Sitemap']
    },
    {
      title: 'Senior Manager - Business Development',
      company: 'AIESEC in Dehradun',
      date: '1 Aug 2023 - 1 Aug 2024',
      description: 'Led business development initiatives and stakeholder relationships. Managed partnership strategies, coordinated with external organizations, and drove revenue opportunities. Handled operational planning and execution of business-critical projects under organizational deadlines.',
      skills: ['Leadership', 'Partnerships', 'Strategy', 'Team Management', 'Operations']
    },
    {
      title: 'Senior Manager - Customer Experience',
      company: 'AIESEC in Dehradun',
      date: '1 Aug 2024 - 1 Jan 2025',
      description: 'Managed and mentored international interns, providing guidance on professional development and program execution. Led a diverse team of foreign interns, coordinated their activities, and ensured smooth program delivery. Focused on creating positive experiences and building strong team dynamics.',
      skills: ['Team Leadership', 'Mentorship', 'International Coordination', 'Interns Management', 'Program Execution']
    }
  ];

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <h2 className="section-title" data-animate>Experience & Journey</h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div className="timeline-item" key={idx} data-animate>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-date">{exp.date}</p>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
