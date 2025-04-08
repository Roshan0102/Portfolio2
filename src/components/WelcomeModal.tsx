import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: (name?: string) => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/greeting.mp3');
    audio.preload = 'auto';
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playGreeting = () => {
    if (audioRef.current && !isMuted) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(error => {
        console.log('Audio playback failed:', error);
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowGreeting(true);
    playGreeting();
    setTimeout(() => {
      onClose(name);
    }, 2000);
  };

  const handleSkip = () => {
    setShowGreeting(true);
    playGreeting();
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#1a1a2e] rounded-2xl p-8 max-w-md w-full shadow-2xl border border-[#ff2e63]/20"
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={toggleMute}
                className="p-2 rounded-full hover:bg-[#ff2e63]/10 transition-colors"
              >
                {isMuted ? (
                  <VolumeOffIcon className="text-gray-400" />
                ) : (
                  <VolumeUpIcon className="text-[#ff2e63]" />
                )}
              </button>
            </div>
            
            {!showGreeting ? (
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#ff2e63] to-[#08d9d6] bg-clip-text text-transparent">
                  Welcome to My Portfolio!
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name (optional)"
                      className="w-full px-4 py-3 rounded-xl bg-[#16213e] text-white border border-[#ff2e63]/20 focus:border-[#08d9d6] outline-none transition-colors duration-300"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-[#ff2e63] to-[#ff2e63]/80 rounded-xl text-white font-semibold hover:shadow-lg transition-shadow duration-300"
                    >
                      Enter
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={handleSkip}
                      className="px-6 py-3 bg-gradient-to-r from-[#08d9d6] to-[#08d9d6]/80 rounded-xl text-white font-semibold hover:shadow-lg transition-shadow duration-300"
                    >
                      Skip
                    </motion.button>
                  </div>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#ff2e63] to-[#08d9d6] bg-clip-text text-transparent">
                  {name ? `Welcome, ${name}!` : 'Welcome!'}
                </h2>
                <p className="text-gray-300 text-lg">
                  Thank you for visiting my portfolio.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal; 