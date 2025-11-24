import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroVideoProps {
    onComplete: () => void;
}

const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete }) => {
    const [videoEnded, setVideoEnded] = useState(false);

    useEffect(() => {
        const video = document.getElementById('intro-video') as HTMLVideoElement;

        if (video) {
            // Play the video
            video.play().catch((error) => {
                console.error('Error playing video:', error);
                // If autoplay fails, skip to content after 1 second
                setTimeout(() => {
                    setVideoEnded(true);
                    setTimeout(onComplete, 500);
                }, 1000);
            });

            // Handle video end
            const handleVideoEnd = () => {
                setVideoEnded(true);
                // Wait for fade out animation before calling onComplete
                setTimeout(onComplete, 500);
            };

            video.addEventListener('ended', handleVideoEnd);

            return () => {
                video.removeEventListener('ended', handleVideoEnd);
            };
        }
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!videoEnded && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 bg-black flex items-center justify-center"
                >
                    <video
                        id="intro-video"
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                    >
                        <source src="/earth rotation.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Optional: Skip button */}
                    <button
                        onClick={() => {
                            setVideoEnded(true);
                            setTimeout(onComplete, 500);
                        }}
                        className="absolute bottom-8 right-8 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/30 hover:border-white/50"
                        style={{ color: '#D0E0F0' }}
                    >
                        Skip Intro
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroVideo;
