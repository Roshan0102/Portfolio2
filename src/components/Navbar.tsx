import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', to: 'home' },
    { title: 'Skills', to: 'skills' },
    { title: 'Experience', to: 'experience' },
    { title: 'Projects', to: 'projects' },
    { title: 'Certifications', to: 'certifications' },
    { title: 'Education', to: 'education' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full z-50 top-0 transition-all duration-500`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className={`flex justify-center md:justify-center items-center px-6 py-3 rounded-full relative transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-xl border border-white/20' : 'bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-transparent'}`}>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  activeClass="nav-active"
                  key={item.title}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className={`relative px-5 py-2 text-[13px] font-bold tracking-widest uppercase rounded-full cursor-pointer transition-all duration-300 group ${activeItem === item.title ? 'text-blue-700 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
                  onSetActive={() => setActiveItem(item.title)}
                >
                  <span className="relative z-10">{item.title}</span>
                  {activeItem === item.title && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full z-0 shadow-inner"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {activeItem !== item.title && (
                    <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 transition-colors rounded-full scale-0 origin-center opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-0" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation Title indicating current section or generic text */}
            <div className="md:hidden flex-1 text-center pr-10">
              <span className="text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-1">
                {activeItem}
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden absolute right-4 flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-900/80 shadow-sm text-blue-600 hover:bg-blue-50 transition-all active:scale-95 border border-gray-100 dark:border-gray-800"
                aria-label="Toggle menu"
              >
                {isOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              className="md:hidden absolute top-full left-4 right-4 mt-2 overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20"
            >
              <div className="p-4 space-y-2 flex flex-col items-center">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="w-full"
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-64}
                      duration={500}
                      className="block w-full px-4 py-3 rounded-xl text-gray-800 dark:text-gray-200 font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all text-center"
                      onClick={() => {
                        setIsOpen(false);
                        setActiveItem(item.title);
                      }}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar; 