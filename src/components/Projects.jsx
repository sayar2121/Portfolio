import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import './Projects.css';

const categories = ['All', 'Mobile', 'AI/ML', 'Hackathon'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">// 03. projects</span>
          <h2 className="section-title">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <div className="neon-line" />
          <p className="section-subtitle">
            A showcase of projects spanning mobile apps, AI systems, and full-stack solutions.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="skill-filters"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Scroll Stack */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="projects-scroll-container"
          >
            <ScrollStack
              useWindowScroll={true}
              itemScale={0.03}
              itemDistance={120}
              itemStackDistance={40}
              baseScale={0.85}
              scaleDuration={0.5}
              stackPosition="20%"
              scaleEndPosition="10%"
            >
              {filtered.map((project, i) => (
                <ScrollStackItem key={project.id} itemClassName="project-card glass-card">
                  {/* Top glow bar */}
                  <div
                    className="card-top-bar"
                    style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                  />

                  <div className="project-card-body" onClick={() => setSelected(project)} style={{ cursor: 'pointer' }}>
                    <div className="project-icon-wrap" style={{ borderColor: `${project.color}40` }}>
                      <span className="project-icon">{project.icon}</span>
                    </div>

                    <div className="project-meta">
                      {project.achievement && (
                        <span className="project-achievement">🏆 {project.achievement}</span>
                      )}
                      <h3 className="project-title" style={{ color: project.color }}>
                        {project.title}
                      </h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                      <p className="project-desc">{project.description}</p>
                      
                      {project.features && (
                        <ul className="project-features-list">
                          {project.features.map(feature => (
                            <li key={feature}>
                              <span className="feature-check" style={{ color: project.color }}>✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div className="project-tech">
                      {project.tech.slice(0, 4).map(t => (
                        <span key={t} className="tech-badge" style={{ background: `${project.color}1A`, borderColor: `${project.color}33`, color: project.color }}>{t}</span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="tech-badge" style={{ background: `${project.color}1A`, borderColor: `${project.color}33`, color: project.color }}>+{project.tech.length - 4}</span>
                      )}
                    </div>

                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        onClick={e => e.stopPropagation()}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                      <button
                        className="project-link-btn project-detail-btn"
                        style={{ borderColor: `${project.color}40`, color: project.color }}
                        onClick={(e) => { e.stopPropagation(); setSelected(project); }}
                      >
                        Details →
                      </button>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </motion.div>
        </AnimatePresence>

        {/* Modal */}
        {createPortal(
          <AnimatePresence>
            {selected && (
              <motion.div
                className="project-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
              >
                <motion.div
                  className="project-modal"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.85, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  onClick={e => e.stopPropagation()}
                  style={{ 
                    '--project-color': selected.color,
                    borderColor: `${selected.color}33`,
                    boxShadow: `0 25px 60px rgba(0, 0, 0, 0.6), 0 0 40px ${selected.color}1A`
                  }}
                >
                  <button className="modal-close" onClick={() => setSelected(null)}>✕</button>

                  <div
                    className="modal-header-bar"
                    style={{ background: `linear-gradient(90deg, ${selected.color}, transparent)` }}
                  />

                  <div className="modal-body">
                    <div className="modal-title-row">
                      <span className="modal-icon">{selected.icon}</span>
                      <div>
                        <h2 className="modal-title" style={{ color: selected.color }}>
                          {selected.title}
                        </h2>
                        <p className="modal-subtitle">{selected.subtitle}</p>
                      </div>
                    </div>

                    <p className="modal-desc">{selected.description}</p>

                    <div className="modal-section">
                      <h4 className="modal-section-title">✨ Key Features</h4>
                      <div className="modal-features">
                        {selected.features.map(f => (
                          <span key={f} className="feature-tag" style={{ background: `${selected.color}15`, borderColor: `${selected.color}30` }}>• {f}</span>
                        ))}
                      </div>
                    </div>

                    <div className="modal-section">
                      <h4 className="modal-section-title">🛠️ Tech Stack</h4>
                      <div className="modal-tech">
                        {selected.tech.map(t => (
                          <span key={t} className="tech-badge" style={{ background: `${selected.color}1A`, borderColor: `${selected.color}33`, color: selected.color }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-cta"
                      style={{
                        background: `linear-gradient(135deg, ${selected.color}, ${selected.color}99)`,
                        color: 'white',
                        border: 'none',
                        padding: '12px 28px',
                        borderRadius: '50px',
                        fontFamily: 'var(--font-main)',
                        fontSize: '15px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: `0 10px 30px ${selected.color}40`,
                        transition: 'all 0.3s'
                      }}
                    >
                      <span>View on GitHub</span>
                      <span>→</span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
}
