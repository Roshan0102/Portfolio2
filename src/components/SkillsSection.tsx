import React from 'react';
import { motion } from 'framer-motion';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import AnalyticsIcon from '@mui/icons-material/Analytics';

// Define the skills data
const skillCategories = [
  {
    title: "Cloud Technologies",
    icon: CloudIcon,
    skills: ["AWS (Compute, Storage, DB, Network, Security)", "Git", "Linux", "Grafana", "Prometheus", "CloudFormation"],
    color: "from-blue-400 to-cyan-300"
  },
  {
    title: "Web Development",
    icon: CodeIcon,
    skills: ["ReactJS", "Node.js"],
    color: "from-purple-400 to-pink-300"
  },
  {
    title: "Programming Languages",
    icon: TerminalIcon,
    skills: ["Python", "JavaScript"],
    color: "from-yellow-400 to-orange-300"
  },
  {
    title: "Data Science Tools",
    icon: AnalyticsIcon,
    skills: ["Pandas", "Scikit-learn", "TensorFlow", "Power BI"],
    color: "from-green-400 to-emerald-300"
  },
  {
    title: "Databases",
    icon: StorageIcon,
    skills: ["SQL", "MongoDB"],
    color: "from-red-400 to-rose-300"
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Technical <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A curated stack of modern technologies I use to build scalable, high-performance cloud solutions and applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon fontSize="medium" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;