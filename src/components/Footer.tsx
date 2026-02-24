import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '196d8c62-340f-4232-8bdf-e45c96448232',
          ...formData
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <footer id="contact" className="bg-transparent text-gray-800 dark:text-gray-200 pt-20 pb-10 transition-colors border-t border-gray-200 dark:border-gray-800/50 relative z-10">
      <div className="section-container">

        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-400 to-blue-600 bg-clip-text pb-2 text-transparent inline-block animate-shine">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-2">
            Have a question, a project idea, or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        {/* Glassmorphism Card Container */}
        <div className="max-w-6xl mx-auto bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] shadow-xl p-8 md:p-14 border border-white/60 dark:border-gray-700/50">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-20">

            {/* Left: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
                Contact Information
              </h3>

              <div className="space-y-6 text-gray-600 dark:text-gray-400 mb-10">
                <a href="mailto:roshanjustinjr2002@gmail.com" className="flex items-center gap-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <EmailIcon />
                  </div>
                  <span className="font-medium text-sm lg:text-base break-all">roshanjustinjr2002@gmail.com</span>
                </a>
                <a href="tel:+918754210276" className="flex items-center gap-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <PhoneIcon />
                  </div>
                  <span className="font-medium text-sm lg:text-base">+91 8754210276</span>
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/roshan-j-628672203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-gray-200 dark:border-gray-700 transition-all transform hover:-translate-y-1 shadow-sm"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="https://github.com/Roshan0102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 border border-gray-200 dark:border-gray-700 transition-all transform hover:-translate-y-1 shadow-sm"
                    aria-label="GitHub Profile"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/roshan__xavier__/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/30 border border-gray-200 dark:border-gray-700 transition-all transform hover:-translate-y-1 shadow-sm"
                    aria-label="Instagram Profile"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="https://wa.me/918754210276?text=Hi%20Roshan,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 border border-gray-200 dark:border-gray-700 transition-all transform hover:-translate-y-1 shadow-sm"
                    aria-label="WhatsApp Chat"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/50 dark:border-gray-700/50 shadow-inner"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-green-600 dark:text-green-400 text-center font-medium bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800/50">
                    Message sent successfully! ✨
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-red-600 dark:text-red-400 text-center font-medium bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800/50">
                    Failed to send message. Please try again.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        {/* Global Footer Bottom */}
        <div className="mt-24 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium tracking-wide">
            © {new Date().getFullYear()} Roshan J. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 