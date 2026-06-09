import { Suspense, lazy, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

// Lazy load the heavy 3D background
const ThreeBackground = lazy(() => import('./components/ThreeBackground'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app-root">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div 
            key="main-app"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="app-main-wrapper"
          >
            {/* 3D Three.js Background */}
            <Suspense fallback={null}>
              <ThreeBackground />
            </Suspense>

            {/* Background gradient overlay */}
            <div className="app-gradient-overlay" />

            {/* Grid Background */}
            <div className="app-grid-bg" />

            {/* Main Content */}
            <div className="app-content">
              <Navbar />
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Research />
                <Contact />
              </main>
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
