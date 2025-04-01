import React from 'react';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-primary">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-auto"
          >
            <img
              src="https://i.postimg.cc/T2J0WJ00/URK20-AI1036-removebg.png"
              alt="Roshan J"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Roshan J
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-800 font-semibold">
              AI & Full Stack Developer
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              B.Tech graduate in Artificial Intelligence and Data Science with expertise in full-stack development and AI. 
              Proficient in Python, SQL, and AWS cloud computing. Experienced in building dynamic web applications 
              using React.JS, Node.js, and MongoDB.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="https://www.linkedin.com/in/roshan-j-628672203/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 inline-flex items-center gap-2"
              >
                <LinkedInIcon /> Connect on LinkedIn
              </a>
              <a 
                href="https://github.com/Roshan0102" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 inline-flex items-center gap-2"
              >
                <GitHubIcon /> View GitHub
              </a>
              <a
                href="https://drive.google.com/file/d/1r3PFmdfxyOaMb-n2iKzK1qJtRaa9oHgi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 inline-flex items-center gap-2"
              >
                <DownloadIcon /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 