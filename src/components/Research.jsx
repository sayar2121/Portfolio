import { motion } from 'framer-motion';
import { achievements, research } from '../data/portfolioData';
import './Research.css';

export default function Research() {
  return (
    <section id="research" className="section research-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">// 05. achievements & research</span>
          <h2 className="section-title">
            Recognition & <span className="gradient-text">Research</span>
          </h2>
          <div className="neon-line" />
        </motion.div>

        {/* Research Paper */}
        <motion.div
          className="research-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
        >
          <div className="research-badge-row">
            <span className="research-type-badge">📄 Research Publication</span>
            <span className="research-status-badge">Published 2026</span>
          </div>

          <div className="research-main">
            <div className="research-icon-wrap">
              <span className="research-big-icon">🧪</span>
              <div className="research-icon-glow" />
            </div>

            <div className="research-content">
              <h3 className="research-project-name gradient-text-blue">{research.title}</h3>
              <h4 className="research-paper-title">"{research.paper}"</h4>
              <p className="research-conference">
                <span className="conf-icon">🏛️</span>
                {research.conference}
              </p>

              <div className="research-domains">
                {research.domains.map(d => (
                  <span key={d} className="domain-tag">{d}</span>
                ))}
              </div>

              <div className="research-contributions">
                <h5 className="contrib-heading">Contributions:</h5>
                <div className="contrib-list">
                  {research.contributions.map(c => (
                    <div key={c} className="contrib-item">
                      <span className="contrib-check">✓</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {research.github && (
                <div className="research-links" style={{ marginTop: '24px' }}>
                  <a
                    href={research.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ padding: '8px 20px', fontSize: '14px' }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Repository
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="achievements-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="achievements-heading">
            <span>🏆</span> Hackathons & Achievements
          </h3>
          <div className="achievements-grid">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                className="achievement-card glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.03 }}
                style={{ '--ach-color': ach.color }}
              >
                <div
                  className="ach-glow-line"
                  style={{ background: ach.color }}
                />
                <div className="ach-icon-wrap" style={{ boxShadow: `0 0 20px ${ach.color}30` }}>
                  <span className="ach-icon">{ach.icon}</span>
                </div>
                <h4 className="ach-title" style={{ color: ach.color }}>{ach.title}</h4>
                <p className="ach-subtitle">{ach.subtitle}</p>
                <p className="ach-desc">{ach.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
