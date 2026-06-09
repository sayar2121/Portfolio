import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';
import lottie from "lottie-web";
import boredHandData from "../assets/bored-hand.json";

export default function Loader({ onComplete }) {
  const [flash, setFlash] = useState(false);
  const lottieContainer = useRef(null);

  useEffect(() => {
    const flashTimer = setTimeout(() => {
      setFlash(true);
    }, 4500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    const anim = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: boredHandData,
    });

    return () => {
      clearTimeout(flashTimer);
      clearTimeout(completeTimer);
      anim.destroy();
    };
  }, [onComplete]);

  return (
    <motion.div 
      className={`premium-loader-container ${flash ? 'flash' : ''}`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "brightness(2)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="loader-particles" />

      <div className="loader-center-group">
        
        {/* Orbiting Tech Icons */}
        <motion.div 
          className="loader-orbit-ring"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
        >
          {['flutter.png', 'FastAPI.png', 'Python.png', 'PostgresSQL.png', 'React.png'].map((icon, i) => (
            <div key={i} className={`orbit-node orbit-node-${i}`}>
              <img src={`/${icon}`} alt="tech" />
            </div>
          ))}
        </motion.div>

        {/* Simulated Circuit Drawing Ring */}
        <motion.svg 
          className="loader-svg-ring"
          viewBox="0 0 200 200"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 270 }}
          transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
        >
          <motion.circle 
            cx="100" cy="100" r="90" 
            fill="none" 
            stroke="url(#ringGradient)" 
            strokeWidth="3"
            strokeDasharray="565"
            initial={{ strokeDashoffset: 565 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="100%" stopColor="#B44FFF" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Logo */}
        <motion.img 
          src="/LOGO.png" 
          alt="Sayar Paul Logo" 
          className="loader-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotate: [0, 0, 360, 360],
          }}
          transition={{ 
            opacity: { duration: 1 },
            scale: { duration: 1 },
            rotate: { delay: 2, duration: 1.5, ease: "easeInOut" }
          }}
        />
      </div>

      {/* Text block */}
      <motion.div 
        className="loader-text-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <h1 className="loader-name">SAYAR PAUL</h1>
        <p className="loader-role">FULL STACK DEVELOPER</p>
      </motion.div>

      {/* Loading Animation */}
      <motion.div 
        className="loader-progress-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
      >
        <div ref={lottieContainer} className="lottie-hand-container" />
      </motion.div>
    </motion.div>
  );
}
