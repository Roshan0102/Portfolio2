import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MockTestLanding: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="py-20 bg-transparent relative z-10 transition-colors min-h-screen pt-24">
            <div className="section-container">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 mb-8 transition-colors"
                >
                    <ArrowBackIcon /> Back to Portfolio
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-400 to-blue-600 bg-clip-text pb-2 text-transparent inline-block">
                        Mock Tests
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-5">
                        Practice with verified mock tests to ace your certifications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gray-50 dark:bg-gray-800/80 transition-colors rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-purple-300"
                        onClick={() => navigate('/mock-tests/aws-ccp')}
                    >
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">AWS Certified Cloud Practitioner</h3>
                        <p className="text-gray-600 dark:text-gray-400">Mock tests with verified answers and explanations.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MockTestLanding;
