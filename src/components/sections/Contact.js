import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
  const ref = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <h2 className="section-title" data-animate>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info" data-animate>
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>

            <div className="contact-methods">
              <div className="contact-method">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:dakshnautiyal88@gmail.com">dakshnautiyal88@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-method">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:+918445603923">+91 8445603923</a></p>
                </div>
              </div>
              <div className="contact-method">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Dehradun, Uttarakhand</p>
                </div>
              </div>
            </div>

            <div className="social-links-contact">
              <a href="https://github.com/daksh88" target="_blank" rel="noopener noreferrer" className="social-icon-large" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/dakshnautiyal/" target="_blank" rel="noopener noreferrer" className="social-icon-large" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/dakshnautiyal1/" target="_blank" rel="noopener noreferrer" className="social-icon-large" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-animate>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5" 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
