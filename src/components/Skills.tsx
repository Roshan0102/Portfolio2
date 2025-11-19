import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  category: string;
  items: string[];
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: "DevOps",
      items: ["AWS Cloud", "CloudFormation", "Terraform"]
    },
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "TypeScript"]
    },
    {
      category: "Database & Query",
      items: ["SQL", "MongoDB"]
    },
    {
      category: "Data Science",
      items: ["Pandas", "Scikit-learn", "TensorFlow", "Machine Learning", "Deep Learning", "Data Analysis", "Data Visualization"]
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "ReactJS", "NodeJS"]
    },
    {
      category: "Soft Skills",
      items: ["Communication", "Problem-solving", "Leadership", "Decision-making", "Creativity"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 absolute bottom-0 left-0"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
              Skills & Expertise
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-5">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </motion.div>

        <motion.div
          key={skills.length}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 relative inline-block">
                {skillGroup.category}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 absolute bottom-0 left-0"
                />
              </h3>
              <div className="flex flex-wrap gap-2 mt-5">
                {skillGroup.items.map((skill, skillIndex) => {
                  // Different animation variants based on skill index
                  const pulseVariants = {
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                        delay: 0.3 + skillIndex * 0.05
                      }
                    },
                    hover: {
                      scale: 1.07,
                      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }
                  };

                  // Generate unique gradient for each skill
                  const gradientStyle = {
                    background: `linear-gradient(135deg, rgba(${130 + skillIndex * 5}, ${159 + skillIndex * 3}, 255, 0.7), rgba(${180 + skillIndex * 2}, ${100 + skillIndex * 5}, 255, 0.8))`,
                    boxShadow: '0px 2px 8px rgba(0,0,0,0.1)'
                  };

                  return (
                    <motion.span
                      key={skill}
                      variants={pulseVariants}
                      whileHover="hover"
                      className="px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2 transform transition-all duration-300"
                      style={gradientStyle}
                    >
                      <motion.span
                        animate={{
                          rotate: [0, 5, 0, -5, 0],
                          opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1 + skillIndex
                        }}
                        className="text-xs">✦</motion.span>
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 