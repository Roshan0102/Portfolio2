import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '918754210276'; // Your phone number with country code
  const defaultMessage = 'Hi Roshan, I visited your portfolio and would like to connect!';

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
          aria-label="Open WhatsApp Chat"
        >
          <WhatsAppIcon fontSize="large" />
        </button>
      </motion.div>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.3 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 bg-white rounded-xl shadow-2xl w-[300px] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-500 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <WhatsAppIcon className="text-white" />
                <h3 className="text-white font-semibold">Chat with Roshan</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-green-600 rounded-full p-1 transition-colors"
                aria-label="Close chat"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 bg-gray-50">
              <p className="text-gray-600 mb-4">
                Hi there! 👋 Feel free to message me on WhatsApp. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
              >
                <WhatsAppIcon />
                Start Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat; 