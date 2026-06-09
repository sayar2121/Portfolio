import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { experience, education, journeyImages } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemLeftVariants = {
    hidden: { opacity: 0, x: -40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, x: 0, filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 200, damping: 20 }
    }
  };

  const itemRightVariants = {
    hidden: { opacity: 0, x: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, x: 0, filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 200, damping: 20 }
    }
  };

  const row1 = journeyImages.slice(0, 16);
  const row2 = journeyImages.slice(16);

  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">// 04. experience</span>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="neon-line" />
        </motion.div>

        <div className="exp-edu-grid">
          {/* Experience */}
          <div className="exp-col">
            <h3 className="col-heading">
              <span className="col-icon">💼</span> Work Experience
            </h3>
            <motion.div 
              className="timeline"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                className="timeline-line"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.div className="timeline-glow-dot" 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 6, ease: "linear", repeat: Infinity }}
              />
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  className="timeline-item glass-card"
                  variants={itemLeftVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="timeline-marker">
                    <div className="timeline-marker-pulse" />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="tl-icon">{exp.icon}</span>
                      <div>
                        <h4 className="tl-role">{exp.role}</h4>
                        <p className="tl-company">{exp.company}</p>
                      </div>
                      <span className="tl-duration">{exp.duration}</span>
                    </div>
                    <p className="tl-desc">{exp.description}</p>
                    <div className="tl-tech">
                      {exp.tech.map(t => (
                        <span key={t} className="tech-badge">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <motion.div 
            className="edu-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="col-heading">
              <span className="col-icon">🎓</span> Education
            </h3>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="edu-card glass-card"
                variants={itemRightVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="edu-top">
                  <span className="edu-icon">{edu.icon}</span>
                  <div>
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-institution">{edu.institution}</p>
                    <span className="edu-duration">{edu.duration}</span>
                  </div>
                </div>
                <p className="edu-desc">{edu.description}</p>

                <div className="edu-badges">
                  <div className="edu-badge">
                    <span>📍</span><span>Hooghly, WB</span>
                  </div>
                  <div className="edu-badge">
                    <span>📚</span><span>MAKAUT University</span>
                  </div>
                  <div className="edu-badge">
                    <span>💻</span><span>CGPA: Pursuing</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* GDG Card */}
            <motion.div
              className="gdg-card glass-card"
              variants={itemRightVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="gdg-header">
                <span className="gdg-icon">🎯</span>
                <div>
                  <h4 className="gdg-title">GDG On Campus HETC</h4>
                  <p className="gdg-role">Graphics Design & Social Media Lead</p>
                </div>
              </div>
              <p className="gdg-desc">
                Leading design and social media strategy for Google Developer Groups on Campus at Hooghly Engineering & Technology College. Building community, creating content, and promoting tech culture.
              </p>
              <div className="gdg-badge">
                <span>🔵</span>
                <span>Google Developer Groups</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Journey Gallery */}
        <motion.div
          className="gallery-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="gallery-heading">
            <span className="col-icon">📸</span> Memories & Moments
          </h3>
          
          <div className="marquee-container">
            <div className="marquee-row marquee-left">
              <div className="marquee-track">
                {[...row1, ...row1].map((src, i) => (
                  <div 
                    key={i} 
                    className="marquee-item"
                    onClick={() => setSelectedImage(src)}
                  >
                    <img src={src} alt="Memory" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="marquee-row marquee-right">
              <div className="marquee-track-reverse">
                {[...row2, ...row2].map((src, i) => (
                  <div 
                    key={i} 
                    className="marquee-item"
                    onClick={() => setSelectedImage(src)}
                  >
                    <img src={src} alt="Memory" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        {createPortal(
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="lightbox-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
                <motion.img
                  src={selectedImage}
                  alt="Enlarged memory"
                  className="lightbox-img"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  onClick={e => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
}
