import React, { useState } from 'react';
// Main App Component
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/SkillsSection';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Internships from './components/Internships';
import Education from './components/Education';
import LinkedInPosts from './components/LinkedInPosts';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';
import AIChat from './components/AIChat';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MockTestLanding from './components/mock-tests/MockTestLanding';
import AWSCCPMockTests from './components/mock-tests/AWSCCPMockTests';
import MockTestRunner from './components/mock-tests/MockTestRunner';
import { motion, AnimatePresence } from 'framer-motion';

const Content: React.FC = () => {
  const location = useLocation();
  const isMockTest = location.pathname.startsWith('/mock-tests');
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-primary"
    >
      {!isMockTest && showModal && <WelcomeModal onClose={handleModalClose} />}

      <AnimatePresence>
        {!isMockTest && showGreeting && (
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

      {!isMockTest && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <AIChat />
            <Skills />
            <WorkExperience />
            <Projects />
            <Education />
            <Certifications />
            <Internships />
            <LinkedInPosts />
          </>
        } />
        <Route path="/mock-tests" element={<MockTestLanding />} />
        <Route path="/mock-tests/aws-ccp" element={<AWSCCPMockTests />} />
        <Route path="/mock-tests/aws-ccp/:testId" element={<MockTestRunner />} />
      </Routes>
      {!isMockTest && <Footer />}
    </motion.div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Content />
    </Router>
  );
};

export default App;