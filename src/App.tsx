import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Internships from './components/Internships';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';
import WhatsAppChat from './components/WhatsAppChat';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const [visitorName, setVisitorName] = useState<string | undefined>();
  const [showGreeting, setShowGreeting] = useState(false);

  const handleModalClose = (name?: string) => {
    setVisitorName(name);
    setShowModal(false);
    setShowGreeting(true);
    // Hide greeting after 5 seconds
    setTimeout(() => setShowGreeting(false), 5000);
  };

  return (
    <div className="min-h-screen bg-primary">
      {showModal && <WelcomeModal onClose={handleModalClose} />}
      
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-lg"
          >
            <p className="text-lg font-medium text-gray-800 dark:text-white">
              {visitorName
                ? `Hi ${visitorName}, welcome to my portfolio! I'm excited to share my work with you.`
                : "Hi there! Welcome to my portfolio. I'm excited to share my work with you."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Certifications />
      <Internships />
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default App; 