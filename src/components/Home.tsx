import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';

const Home: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

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
    x.set(0);
    y.set(0);
  };

  // Floating Icons Configuration
  const floatingIcons = [
    { Icon: CloudIcon, top: '10%', left: '10%', delay: 0 },
    { Icon: StorageIcon, top: '20%', right: '15%', delay: 1 },
    { Icon: CodeIcon, bottom: '15%', left: '15%', delay: 2 },
    { Icon: TerminalIcon, bottom: '20%', right: '10%', delay: 3 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 bg-[#f0f9ff] relative overflow-hidden">

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-20 left-1/3 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-pink-200/40 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Tech Icons Background - Hidden on small screens to prevent clutter */}
      <div className="hidden md:block">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-200/50 pointer-events-none z-0"
            style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
          >
            <item.Icon style={{ fontSize: 80 }} />
          </motion.div>
        ))}
      </div>

      {/* Main Glass Card */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden p-6 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* Left Column: Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-6 relative z-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-blue-100/80 text-blue-700 font-semibold text-sm tracking-wider mb-4 border border-blue-200">
                  👋 WELCOME TO MY PORTFOLIO
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-gray-900 mb-2">
                  Hi, I'm <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-shine">
                    Roshan J
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-3">
                  <CloudIcon className="text-blue-500" />
                  Cloud Engineer <span className="text-gray-400">@</span> Axcess.io
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Architecting scalable AWS infrastructure and building cloud-native solutions.
                Merging <b>Artificial Intelligence</b> with <b>DevOps</b> to create intelligent, automated systems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start pt-4"
              >
                <a
                  href="https://www.linkedin.com/in/roshan-j-628672203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
                <a
                  href="https://github.com/Roshan0102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl bg-white text-gray-800 font-semibold shadow-lg border border-gray-100 hover:border-purple-200 hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
                >
                  <GitHubIcon /> GitHub
                </a>
                <a
                  href="/assets/Roshan_Cloud_Engineer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:opacity-90 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
                >
                  <DownloadIcon /> Resume
                </a>
              </motion.div>
            </div>

            {/* Right Column: 3D Image Card */}
            <div className="order-1 lg:order-2 flex justify-center perspective-1000 relative z-20">
              <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative w-64 md:w-80 lg:w-96 aspect-[4/5] cursor-pointer group"
              >
                {/* Decorative Back Card */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300 opacity-80"
                  style={{ transform: 'translateZ(-20px)' }}
                />

                {/* Main Image Card */}
                <div
                  className="absolute inset-0 bg-white rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <img
                    src="/assets/profile.png"
                    alt="Roshan J"
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
