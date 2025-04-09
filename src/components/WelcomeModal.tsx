import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

interface WelcomeModalProps {
  onClose: (name?: string) => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [audio] = useState(new Audio('/greeting.mp3'));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const playGreeting = (visitorName?: string) => {
    // Play the greeting audio
    audio.currentTime = 0; // Reset audio to start
    audio.play().catch(error => {
      console.log('Audio playback failed:', error);
    });
  };

  const sendNotification = async (visitorName?: string) => {
    try {
      // Send notification email using Web3Forms
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '196d8c62-340f-4232-8bdf-e45c96448232', // Replace with your Web3Forms access key
          subject: 'New Portfolio Visitor',
          message: visitorName 
            ? `${visitorName} is viewing your portfolio website`
            : 'An unknown person is viewing your portfolio website',
          from_name: visitorName || 'Unknown Visitor'
        })
      });
      console.log('Email notification sent successfully');
    } catch (error) {
      console.error('Failed to send notification:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Play greeting audio
    playGreeting(name.trim());
    
    // Send email notification
    await sendNotification(name.trim());
    
    setIsSubmitting(false);
    onClose(name.trim());
  };

  const handleSkip = async () => {
    setIsSubmitting(true);
    
    // Play greeting audio
    playGreeting();
    
    // Send email notification
    await sendNotification();
    
    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
        >
          <button
            onClick={handleSkip}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            disabled={isSubmitting}
          >
            <CloseIcon />
          </button>

          <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome!</h2>
          <p className="text-gray-600 mb-8">
            I'm excited to show you my portfolio. Would you like to introduce yourself?
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name (optional)
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your name"
                disabled={isSubmitting}
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Please wait...' : 'Proceed'}
              </button>
              <button
                type="button"
                onClick={handleSkip}
                className="flex-1 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Please wait...' : 'Skip'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default WelcomeModal; 