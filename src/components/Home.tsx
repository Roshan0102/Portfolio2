import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring animations for smooth movement
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 30
  });

  // Handle mouse move for 3D tilt effect
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-primary relative overflow-hidden">
      {/* Gradient Blobs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-64 h-64 bg-gradient-to-br from-cyan-400/25 to-blue-400/25 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 35, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-56 h-56 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute top-10 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-300/25 to-cyan-300/25 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section with 3D Tilt Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-auto perspective-1000"
          >
            <motion.div
              ref={ref}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={handleMouseLeave}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                scale: isHovering ? 1.05 : 1,
              }}
              className="cursor-pointer"
            >
              <img
                src="https://i.postimg.cc/T2J0WJ00/URK20-AI1036-removebg.png"
                alt="Roshan J"
                className="w-full h-auto"
              />
            </motion.div>
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
              Cloud Engineer @Axcess.io
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              AI & Cloud Computing Professional with a B.Tech in Artificial Intelligence and Data Science.
              Skilled in designing and deploying intelligent systems with hands-on expertise in Python, SQL, Machine Learning, Deep Learning, and Data Analytics.
              Proficient in leveraging AWS Cloud services to build, deploy, and manage cloud-native solutions.
              Passionate about solving real-world problems through data-driven insights and innovative technology.
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
