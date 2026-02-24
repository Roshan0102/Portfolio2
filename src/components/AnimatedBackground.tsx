import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Base background layer that responds to theme */}
            <div className="absolute inset-0 bg-[#f0f9ff] dark:bg-gray-950 transition-colors duration-500" />

            {/* Roaming Blobs */}
            <motion.div
                animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-300/40 dark:bg-purple-900/30 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-20 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-blue-300/40 dark:bg-blue-900/30 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{ x: [0, 30, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-20 left-1/3 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pink-300/40 dark:bg-pink-900/30 rounded-full blur-[100px]"
            />
        </div>
    );
};

export default AnimatedBackground;
