import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const highlights = [
  { icon: '🚀', title: 'Full Stack Dev', desc: 'Mobile, Web & Backend' },
  { icon: '🤖', title: 'AI/ML Engineer', desc: 'Intelligent Systems' },
  { icon: '📊', title: 'Data Analytics', desc: 'Power BI & Python' },
  { icon: '🎨', title: 'UI/UX Designer', desc: 'CodSoft Intern' },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">// 01. about me</span>
          <h2 className="section-title">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="neon-line" />
        </motion.div>

        <div className="about-grid">
          {/* Left: Text */}
          <motion.div
            className="about-text-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="about-card glass-card">
              <div className="about-avatar">
                <span className="avatar-emoji">👨‍💻</span>
                <div className="avatar-rings">
                  <div className="avatar-ring" />
                  <div className="avatar-ring" />
                </div>
              </div>

              <div className="about-info">
                <h3 className="about-name">Sayar Paul</h3>
                <p className="about-role gradient-text-blue">
                  Full Stack Developer • Flutter • FastAPI • AI/ML
                </p>
                <div className="about-location">
                  <span>📍</span>
                  <span>Kolkata, West Bengal, India</span>
                </div>
                <div className="about-edu">
                  <span>🎓</span>
                  <span>B.Tech CSE @ HETC (4th Year)</span>
                </div>
                <div className="about-status">
                  <span className="status-dot" />
                  <span>Available for Internships & Full-time</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            className="about-story-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about-story">
              <p className="story-text">
                🚀 <strong>Tech Enthusiast | Designer | Problem Solver</strong>
              </p>
              <p className="story-body">
                I'm a passionate <span className="accent-text">Full Stack Developer</span> and Tech Enthusiast with experience in building scalable mobile and web applications using <span className="accent-text">Flutter, FastAPI, Python</span>, and modern backend technologies.
              </p>
              <p className="story-body">
                My expertise spans frontend development, backend architecture, REST API design, database management, and real-time systems. I enjoy creating clean, user-focused digital products with strong performance and modern UI/UX design principles.
              </p>
              <p className="story-body">
                Along with software development, I work in <span className="accent-text">Data Analytics, AI, and Business Intelligence</span> — using Python, SQL, Power BI, and Machine Learning to analyze data, generate insights, and build intelligent decision-making systems.
              </p>

              <div className="story-quote">
                <span className="quote-icon">"</span>
                <p>I believe in combining creativity, analytics, and technology to build impactful digital experiences.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="highlight-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="highlight-icon">{h.icon}</span>
              <h4 className="highlight-title">{h.title}</h4>
              <p className="highlight-desc">{h.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
