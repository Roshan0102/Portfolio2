import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Internships from './components/Internships';
import Education from './components/Education';
import LinkedInPosts from './components/LinkedInPosts';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-primary"
      >

        <Navbar />
        <Home />
        <AIChat />
        <Skills />
        <WorkExperience />
        <Projects />
        <Education />
        <Certifications />
        <Internships />
        <LinkedInPosts />
        <Footer />
      </motion.div>
    </>
  );
};

export default App; 