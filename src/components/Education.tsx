import React from 'react';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import TimelineIcon from '@mui/icons-material/Timeline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MenuBookIcon from '@mui/icons-material/MenuBook';

interface EducationItem {
  type: 'university' | 'school';
  institution: string;
  degree: string;
  year: string;
  grade?: string;
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      type: 'university',
      institution: 'Karunya University',
      degree: 'B.Tech Artificial Intelligence and Data Science',
      year: '2021 - 2025',
      grade: '8.5 CGPA'
    },
    {
      type: 'school',
      institution: 'Holy Spirit Matric Hr. Sec. School',
      degree: 'Higher Secondary Education',
      year: '2019 - 2021',
      grade: '94.8%'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -80 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: [0, 1.2, 1],
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="education" className="py-32 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff2e63] rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#08d9d6] rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ff2e63] to-[#08d9d6] bg-clip-text text-transparent">
            Education Timeline
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-xl">
            My academic journey through the years
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Timeline line with gradient dots */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff2e63] to-[#08d9d6] transform -translate-x-1/2"
          >
            {/* Decorative dots along the timeline */}
            <div className="absolute w-2 h-2 bg-[#ff2e63] rounded-full top-[25%] -left-0.5"></div>
            <div className="absolute w-2 h-2 bg-[#08d9d6] rounded-full top-[75%] -left-0.5"></div>
          </motion.div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              className="relative mb-32 last:mb-0"
            >
              {/* Timeline icon */}
              <motion.div
                variants={circleVariants}
                whileHover={{ scale: 1.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div className="w-12 h-12 bg-[#1a1a2e] rounded-full border-4 border-[#ff2e63] shadow-lg shadow-[#ff2e63]/50 flex items-center justify-center">
                  {edu.type === 'university' ? (
                    <WorkspacePremiumIcon className="text-[#ff2e63] text-2xl" />
                  ) : (
                    <MenuBookIcon className="text-[#08d9d6] text-2xl" />
                  )}
                </div>
              </motion.div>

              {/* Content card - alternating sides */}
              <div className={`flex justify-center items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-[45%]"></div>
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 25px 30px -5px rgba(255, 46, 99, 0.15), 0 15px 15px -5px rgba(8, 217, 214, 0.15)'
                  }}
                  className={`w-[45%] bg-[#1a1a2e] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#ff2e63]/20 ${
                    index % 2 === 0 ? 'border-r-4 border-r-[#ff2e63]' : 'border-l-4 border-l-[#08d9d6]'
                  }`}
                >
                  <div className="relative">
                    <div className="mb-6">
                      <motion.div
                        variants={iconVariants}
                        whileHover="hover"
                        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-6 ${
                          edu.type === 'university' 
                            ? 'bg-gradient-to-br from-[#ff2e63] to-[#ff2e63]/60'
                            : 'bg-gradient-to-br from-[#08d9d6] to-[#08d9d6]/60'
                        }`}
                      >
                        {edu.type === 'university' ? (
                          <SchoolIcon className="text-white text-2xl" />
                        ) : (
                          <MenuBookIcon className="text-white text-2xl" />
                        )}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-gray-300">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300">
                        <TimelineIcon className={edu.type === 'university' ? 'text-[#ff2e63] text-2xl' : 'text-[#08d9d6] text-2xl'} />
                        <span className="text-lg">{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <LocationOnIcon className={edu.type === 'university' ? 'text-[#ff2e63] text-2xl' : 'text-[#08d9d6] text-2xl'} />
                        <span className="text-lg">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <StarIcon className="text-yellow-400 text-2xl" />
                        <span className="text-lg">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 