import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">// 02. skills</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <div className="neon-line" />
          <p className="section-subtitle">
            Technologies I work with to build modern, scalable digital products.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="skill-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="skill-card glass-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category-tag">{skill.category}</span>
                  </div>
                  <span className="skill-level-num">{skill.level}%</span>
                </div>

                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05, ease: 'easeOut' }}
                    style={{
                      background: `linear-gradient(90deg, #00D4FF, ${
                        skill.level > 85 ? '#7C3AED' : skill.level > 75 ? '#0080FF' : '#06B6D4'
                      })`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  );
}
