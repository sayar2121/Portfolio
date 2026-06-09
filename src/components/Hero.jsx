import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import FuzzyText from './FuzzyText';
import './Hero.css';

const roles = personalInfo.roles;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const cursorRef = useRef(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showResume) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showResume]);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  // Mouse cursor glow
  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const stats = [
    { icon: '🗂️', value: '6+', label: 'Projects' },
    { icon: '⌨️', value: '4+', label: 'Hackathons' },
    { icon: '📖', value: '1',  label: 'Research' },
    { icon: '📅', value: '2+', label: 'Yrs Exp' },
  ];

  const techStack = [
    { name: 'React', icon: 'React.png' },
    { name: 'JavaScript', icon: 'JavaScript.png' },
    { name: 'HTML5', icon: 'HTML5.png' },
    { name: 'CSS3', icon: 'CSS3.png' },
    { name: 'Node.js', icon: 'Node.js.png' },
    { name: 'Python', icon: 'Python.png' },
    { name: 'Django', icon: 'Django.png' },
    { name: 'FastAPI', icon: 'FastAPI.png' },
    { name: 'Flask', icon: 'Flask.png' },
    { name: 'Flutter', icon: 'flutter.png' },
    { name: 'PostgreSQL', icon: 'PostgresSQL.png' },
    { name: 'MySQL', icon: 'MySQL.png' },
    { name: 'MongoDB', icon: 'MongoDB.png' },
    { name: 'SQLAlchemy', icon: 'SQLAlchemy.png' },
    { name: 'Docker', icon: 'Docker.png' },
    { name: 'Git', icon: 'Git.png' },
    { name: 'GitHub', icon: 'GitHub.png' },
    { name: 'NumPy', icon: 'NumPy.png' },
    { name: 'Pandas', icon: 'Pandas.png' },
    { name: 'OpenCV', icon: 'OpenCV.png' },
  ];

  return (
    <section id="home" className="hero-section">
      <div ref={cursorRef} className="cursor-glow" />
      <div className="hero-bg-gradient" />

      <div className="hero-layout">

        {/* ===== LEFT: Text Content ===== */}
        <div className="hero-left">

          {/* Role badge */}
          <motion.div
            className="hero-role-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="role-badge-dot" />
            <span>Full Stack Developer</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            className="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="hero-hi">Hi, I'm</span>
            <div className="hero-name-wrapper">
              <FuzzyText
                baseIntensity={0.08}
                hoverIntensity={0.5}
                enableHover={true}
                fontFamily="'Space Grotesk', sans-serif"
                fontSize="clamp(2.5rem, 6vw, 4.8rem)"
                fontWeight={900}
                gradient={["#00D4FF", "#5B7CFF", "#B44FFF"]}
                letterSpacing={-3}
                className="hero-name"
              >
                SAYAR.
              </FuzzyText>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            A passionate Full Stack Developer crafting{' '}
            <span className="hero-highlight">bold & scalable</span>{' '}
            mobile, web and AI-powered digital products.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a href="#projects" className="btn-hero-primary">
              View My Work <span className="btn-arrow">→</span>
            </a>
            <button onClick={() => setShowResume(true)} className="btn-hero-outline" style={{ cursor: 'pointer' }}>
              View Resume <span className="btn-icon">📄</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="hero-stat-card">
                <span className="stat-icon">{s.icon}</span>
                <span className="stat-number">{s.value}</span>
                <span className="stat-lbl">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="hero-tech-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <div className="tech-section-label">
              <span className="tech-label-icon">⌨</span>
              <span className="tech-label-text">Tech Stack</span>
            </div>
            <div className="tech-icons-row">
              {techStack.map((t) => (
                <div key={t.name} className="tech-icon-item" title={t.name}>
                  <img src={`/${t.icon}`} alt={t.name} className="tech-icon-img" draggable={false} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===== RIGHT: Avatar with glow ring + floating shapes ===== */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Neon ring — FIRST child so it sits behind avatar in DOM */}
          <div className="hero-neon-ring" />

          {/* Orbiting 3D tech icons around the avatar */}
          <div className="orbit-ring">
            <div className="orbit-icon" style={{ '--delay': '0s' }}>
              <div className="orbit-badge"><img src="/flutter.png" alt="Flutter" className="orbit-img" /><span className="orbit-name">Flutter</span></div>
            </div>
            <div className="orbit-icon" style={{ '--delay': '-0.5s' }}>
              <div className="orbit-badge"><img src="/FastAPI.png" alt="FastAPI" className="orbit-img" /><span className="orbit-name">FastAPI</span></div>
            </div>
            <div className="orbit-icon" style={{ '--delay': '-1s' }}>
              <div className="orbit-badge"><img src="/Python.png" alt="Python" className="orbit-img" /><span className="orbit-name">Python</span></div>
            </div>
            <div className="orbit-icon" style={{ '--delay': '-1.5s' }}>
              <div className="orbit-badge"><img src="/React.png" alt="React" className="orbit-img" /><span className="orbit-name">React</span></div>
            </div>
            <div className="orbit-icon" style={{ '--delay': '-2s' }}>
              <div className="orbit-badge"><img src="/PostgresSQL.png" alt="PostgreSQL" className="orbit-img" /><span className="orbit-name">PostgreSQL</span></div>
            </div>
            <div className="orbit-icon" style={{ '--delay': '-2.5s' }}>
              <div className="orbit-badge"><img src="/OpenCV.png" alt="ML / AI" className="orbit-img" /><span className="orbit-name">ML / AI</span></div>
            </div>
          </div>

          {/* Avatar image */}
          <img
            src="/Hero_image.png"
            alt="Sayar Paul"
            className="hero-avatar-img"
            draggable={false}
          />

          {/* Grid floor */}
          <div className="hero-grid-floor" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Scroll Down</span>
      </motion.div>

      {/* Resume PDF Modal */}
      {createPortal(
        <AnimatePresence>
          {showResume && (
            <motion.div
              className="pdf-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResume(false)}
            >
              <button className="pdf-modal-close" onClick={() => setShowResume(false)}>✕</button>
              <motion.div
                className="pdf-modal-content"
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src="/SAYAR PAUL CV New-1.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  className="pdf-iframe"
                  title="Sayar Paul Resume"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
