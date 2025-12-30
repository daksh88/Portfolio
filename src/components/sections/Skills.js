import React, { useRef } from 'react';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
  const ref = useScrollAnimation();

  const skillsData = [
    {
      category: 'Languages',
      icon: <FaCode />,
      skills: [
        { name: 'JavaScript', percentage: 90 },
        { name: 'Python', percentage: 88 },
        { name: 'Java', percentage: 85 },
        { name: 'C++', percentage: 82 },
        { name: 'C', percentage: 80 }
      ]
    },
    {
      category: 'Web Development',
      icon: <FaServer />,
      skills: [
        { name: 'HTML', percentage: 95 },
        { name: 'CSS', percentage: 93 },
        { name: 'Bootstrap', percentage: 88 },
        { name: 'Tailwind CSS', percentage: 87 }
      ]
    },
    {
      category: 'Databases & Tools',
      icon: <FaTools />,
      skills: [
        { name: 'MySQL', percentage: 85 },
        { name: 'Firebase', percentage: 82 },
        { name: 'VS Code', percentage: 95 },
        { name: 'GitHub', percentage: 90 },
        { name: 'Oracle', percentage: 78 }
      ]
    },
    {
      category: 'AI/ML & Platforms',
      icon: <FaCode />,
      skills: [
        { name: 'TensorFlow', percentage: 80 },
        { name: 'Pandas & Numpy', percentage: 85 },
        { name: 'OpenCV', percentage: 82 },
        { name: 'Scikit-learn', percentage: 80 },
        { name: 'Matplotlib', percentage: 83 }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <h2 className="section-title" data-animate>Skills & Technologies</h2>
        <div className="skills-container">
          <div className="scroll-hint">Scroll →</div>
          <div className="skills-grid">
            {skillsData.map((skillCategory, idx) => (
              <div className="skill-category" key={idx} data-animate>
                <h3>
                  {skillCategory.icon}
                  {skillCategory.category}
                </h3>
                <div className="skills-list">
                  {skillCategory.skills.map((skill, i) => (
                    <div className="skill-item" key={i}>
                      <span>{skill.name}</span>
                      <div className="skill-bar">
                        <div 
                          className="skill-fill" 
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
