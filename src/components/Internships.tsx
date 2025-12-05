import React from 'react';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';

interface Internship {
  company: string;
  role: string;
  duration: string;
  description: string[];
  image: string;
  url: string;
}

const Internships: React.FC = () => {
  const internships: Internship[] = [
    {
      company: "NTTF",
      role: "Full-Stack Development Trainee",
      duration: "Nov 2024 - Feb 2025",
      description: [
        "Gained hands-on experience in full-stack development using HTML, CSS, JavaScript, TypeScript, React, Node.js, and MongoDB",
        "Developed and deployed a MERN stack project on AWS, utilizing EC2, S3 and Lambda for cloud deployment",
        "Successfully completed the AWS Cloud Practitioner certification"
      ],
      image: "https://cdn.dribbble.com/users/1059583/screenshots/4171367/coding-freak.gif",
      url: "https://drive.google.com/file/d/184EDkrXPV7Y1ohe4gXtGFBoUeiOYsJza/view"
    },
    {
      company: "CISCO",
      role: "Programming Virtual Intern",
      duration: "May 2022 - Jun 2022",
      description: [
        "Learned Python basics, including variables, loops, functions, modules, and error handling",
        "Practiced writing programs, handling errors, and working with standard Python libraries"
      ],
      image: "https://cdn.dribbble.com/users/730703/screenshots/6581243/avento.gif",
      url: "https://drive.google.com/file/d/1qpzCkPtQhF5QOqQbMPxpSRZph6nirwId/view"
    },
    {
      company: "Tech Solutions Inc.",
      role: "Machine Learning Intern",
      duration: "June 2023 - August 2023",
      description: [
        "Developed and deployed machine learning models for predictive analytics.",
        "Collaborated with the data science team to preprocess and analyze large datasets.",
        "Implemented automated data pipelines and visualization tools.",
        "Presented findings and recommendations to stakeholders."
      ],
      image: "https://i3.wp.com/miro.medium.com/v2/resize:fit:700/1*oNQdz3-wTV8Uo_mainA8xA.gif?w=1920&resize=1920,1440&ssl=1",
      url: "https://drive.google.com/file/d/16nSyTuQS3er9hS-whxbxKMi81OfZUv0q/view"
    }
  ];

  return (
    <section id="internships" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="relative inline-flex flex-col items-center">
            <motion.div
              initial={{
                y: -20,
                opacity: 0
              }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2
              }}
              className="absolute -top-12 text-5xl"
            >
              💼
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
              Internship Experience
            </h2>
            <motion.div
              initial={{
                width: '0%',
                x: '-50%'
              }}
              whileInView={{
                width: '120%',
                x: '-10%'
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.3
              }}
              className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent absolute -bottom-2"
            />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-5">
            Professional experience gained through internships at leading technology companies
          </p>
        </motion.div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300"
            >
              <div className="md:grid md:grid-cols-3 gap-6">
                <div className="relative h-64 md:h-full">
                  <img
                    src={internship.image}
                    alt={internship.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-2">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {internship.role}
                      </h3>
                      <p className="text-xl text-gray-600 mt-1">
                        {internship.company}
                      </p>
                    </div>
                    <span className="inline-block bg-primary px-3 py-1 rounded-full text-sm text-gray-800">
                      {internship.duration}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                    {internship.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <a
                    href={internship.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <LaunchIcon /> View Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships; 