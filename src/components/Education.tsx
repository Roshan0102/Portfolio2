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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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