import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

interface WelcomeModalProps {
  onClose: (name?: string) => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  const [name, setName] = useState('');

  const speakGreeting = (visitorName?: string) => {
    const message = visitorName
      ? `Hi ${visitorName}, welcome to my portfolio! I'm excited to share my work with you.`
      : "Hi there! Welcome to my portfolio. I'm excited to share my work with you.";

    // Function to check if a voice is male (avoiding female voices)
    const isMaleVoice = (voice: SpeechSynthesisVoice) => {
      const name = voice.name.toLowerCase();
      
      // Comprehensive list of male voice indicators
      const maleIndicators = [
        'male', 'man', 'guy', 'boy',
        'david', 'james', 'john', 'paul', 'george', 'thomas',
        'microsoft david', 'google uk english male',
        'daniel', 'fred', 'alex', 'bruce', 'junior', 'ralph',
        'reed', 'tom', 'mike', 'sam'
      ];
      
      // Comprehensive list of female voice indicators to exclude
      const femaleIndicators = [
        'female', 'woman', 'girl', 'lady',
        'zira', 'microsoft eva', 'victoria', 'susan',
        'samantha', 'karen', 'moira', 'tessa', 'monica',
        'microsoft hazel', 'microsoft zira', 'google uk english female',
        'alice', 'ellen', 'martha', 'veena', 'fiona'
      ];

      // Check for explicit male/female markers in the voice name
      const hasMaleIndicator = maleIndicators.some(indicator => name.includes(indicator));
      const hasFemaleIndicator = femaleIndicators.some(indicator => name.includes(indicator));

      // Additional checks for mobile devices
      const isKnownMaleVoice = (
        name.includes('uk english male') ||
        name.includes('us english male') ||
        name.includes('microsoft david') ||
        (name.includes('english') && name.includes('male'))
      );

      return (hasMaleIndicator || isKnownMaleVoice) && !hasFemaleIndicator;
    };

    const setupVoice = (availableVoices: SpeechSynthesisVoice[]) => {
      const utterance = new SpeechSynthesisUtterance(message);
      
      // Find a male voice
      const maleVoice = availableVoices.find(isMaleVoice);
      
      // Configure voice settings
      utterance.rate = 0.9; // Slightly slower rate for better clarity
      utterance.pitch = 0.9; // Slightly lower pitch for male voice
      
      if (maleVoice) {
        utterance.voice = maleVoice;
        console.log('Selected voice:', maleVoice.name); // For debugging
      } else {
        // If no male voice found, try to set a neutral voice with male characteristics
        utterance.pitch = 0.8; // Even lower pitch to ensure masculine sound
      }
      
      window.speechSynthesis.speak(utterance);
    };

    // Get available voices
    const voices = window.speechSynthesis.getVoices();
    
    // If voices are available immediately
    if (voices.length > 0) {
      setupVoice(voices);
    } else {
      // Wait for voices to be loaded (especially important for mobile)
      window.speechSynthesis.addEventListener('voiceschanged', () => {
        const updatedVoices = window.speechSynthesis.getVoices();
        setupVoice(updatedVoices);
      }, { once: true }); // Ensure the event listener is called only once
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    speakGreeting(name.trim());
    onClose(name.trim());
  };

  const handleSkip = () => {
    speakGreeting();
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
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Proceed
              </button>
              <button
                type="button"
                onClick={handleSkip}
                className="flex-1 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
              >
                Skip
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default WelcomeModal; 