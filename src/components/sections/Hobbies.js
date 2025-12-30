import React, { useRef } from 'react';
import { FaGamepad, FaBook, FaDumbbell, FaCamera, FaMusic, FaTree } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Hobbies.css';

const Hobbies = () => {
  const ref = useScrollAnimation();

  const hobbies = [
    { icon: <FaGamepad />, title: 'Gaming', desc: 'Passionate gamer who loves exploring new worlds and challenging myself in competitive games.' },
    { icon: <FaBook />, title: 'Reading', desc: 'Avid reader interested in tech blogs, science fiction, and self-improvement books.' },
    { icon: <FaDumbbell />, title: 'Fitness', desc: 'Regular gym enthusiast focusing on health and maintaining a balanced lifestyle.' },
    { icon: <FaCamera />, title: 'Photography', desc: 'Amateur photographer capturing moments and exploring visual storytelling through the lens.' },
    { icon: <FaMusic />, title: 'Music', desc: 'Music lover who enjoys listening to various genres and discovering new artists.' },
    { icon: <FaTree />, title: 'Outdoor Activities', desc: 'Enjoy trekking, hiking, and exploring nature while staying connected with the environment.' }
  ];

  return (
    <section id="hobbies" className="section hobbies" ref={ref}>
      <div className="container">
        <h2 className="section-title" data-animate>Hobbies & Interests</h2>
        <div className="hobbies-grid">
          {hobbies.map((hobby, idx) => (
            <div className="hobby-card" key={idx} data-animate>
              <div className="hobby-icon">{hobby.icon}</div>
              <h3>{hobby.title}</h3>
              <p>{hobby.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
