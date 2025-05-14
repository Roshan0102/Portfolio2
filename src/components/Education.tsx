import React from 'react';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import TimelineIcon from '@mui/icons-material/Timeline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  score: string;
  duration: string;
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      degree: "B.Tech Artificial Intelligence and Data Science",
      institution: "Karunya University",
      location: "Coimbatore, India",
      score: "CGPA: 8.20",
      duration: "2020 - 2024"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Holy Spirit Matric Hr. Sec. School",
      location: "India",
      score: "Percentage: 80.8%",
      duration: "2019 - 2020"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
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
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative inline-block"
          >
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-6xl opacity-10">🎓</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
              Education Journey
            </h2>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '10px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-20 mx-auto mt-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
            />
          </motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-5">
            My academic path in technology and innovation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={itemVariants}
              className="relative"
            >
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-24 bg-gradient-to-b from-blue-400 to-purple-400" />
              )}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-6">
                  <motion.div
                    variants={iconVariants}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <SchoolIcon className="text-white text-2xl" />
                  </motion.div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-gray-600">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <TimelineIcon className="text-blue-500" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <LocationOnIcon className="text-purple-500" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <StarIcon className="text-yellow-500" />
                        <span>{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 