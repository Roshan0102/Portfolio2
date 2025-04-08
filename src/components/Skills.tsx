import React from 'react';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BiotechIcon from '@mui/icons-material/Biotech';
import WebIcon from '@mui/icons-material/Web';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

interface Skill {
  category: string;
  items: string[];
  icon: JSX.Element;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "TypeScript"],
      icon: <CodeIcon className="text-3xl text-[#ff2e63]" />
    },
    {
      category: "Database & Query",
      items: ["SQL", "MongoDB"],
      icon: <StorageIcon className="text-3xl text-[#08d9d6]" />
    },
    {
      category: "Data Science",
      items: ["Pandas", "Scikit-learn", "TensorFlow", "Machine Learning", "Deep Learning", "Data Analysis", "Data Visualization"],
      icon: <BiotechIcon className="text-3xl text-[#ff2e63]" />
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "ReactJS", "NodeJS", "AWS Cloud"],
      icon: <WebIcon className="text-3xl text-[#08d9d6]" />
    },
    {
      category: "Soft Skills",
      items: ["Communication", "Problem-solving", "Leadership", "Decision-making", "Creativity"],
      icon: <EmojiObjectsIcon className="text-3xl text-[#ff2e63]" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const skillItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
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
    },
    hover: {
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ff2e63] to-[#08d9d6] bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-xl">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                boxShadow: '0 25px 30px -5px rgba(255, 46, 99, 0.15), 0 15px 15px -5px rgba(8, 217, 214, 0.15)'
              }}
              className="bg-[#1a1a2e]/60 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-[#ff2e63]/20"
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="w-16 h-16 rounded-2xl bg-[#16213e] flex items-center justify-center mb-6 shadow-lg"
              >
                {skillGroup.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-6 text-white">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillItemVariants}
                    whileHover="hover"
                    className="px-4 py-2 bg-gradient-to-r from-[#ff2e63]/10 to-[#08d9d6]/10 rounded-xl text-gray-300 border border-[#ff2e63]/20 hover:border-[#08d9d6]/50 transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 