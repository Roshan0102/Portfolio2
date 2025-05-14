import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

interface Project {
  title: string;
  description: string[];
  technologies: string[];
  image: string;
  url: string;
  type: 'github' | 'publication';
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "MERN Full-Stack Bikepooling Platform",
      description: [
        "Designed and developed a bikepooling web application using React.JS, Node.js, Express, and MongoDB.",
        "Implemented secure user authentication and role-based access for riders and passengers.",
        "Enabled ride publishing and request-handling features, allowing seamless ride-sharing.",
        "Deployed on AWS EC2 using shell scripting for automated setup and deployment."
      ],
      technologies: ["React.JS", "Node.js", "Express", "MongoDB", "AWS EC2"],
      image: "https://cdn.dribbble.com/userupload/42510164/file/original-4355ca5538cf5b1f1938e5cf837efab9.gif",
      url: "https://github.com/Roshan0102/TravelBuddy1",
      type: "github"
    },
    {
      title: "Federated Learning for Alzheimer's Diagnosis",
      description: [
        "Developed a federated learning framework for Alzheimer's classification using MRI data from Kaggle.",
        "Implemented CNN architecture (MobileNetV2, InceptionNetV2, VGG16) with 80.3% accuracy.",
        "Applied transfer learning and SMOTE-based data augmentation to enhance performance.",
        "Published in IEEE, demonstrating federated learning's effectiveness in medical imaging."
      ],
      technologies: ["Python", "TensorFlow", "CNN", "Transfer Learning", "Federated Learning"],
      image: "https://scitechdaily.com/images/3D-Brain-Illustration.gif",
      url: "https://ieeexplore.ieee.org/document/10717299",
      type: "publication"
    },
    {
      title: "Ethereum Price Prediction",
      description: [
        "Developed a time-series forecasting model to predict Ethereum prices using SARIMA, RNN, and LSTM.",
        "Performed extensive data preprocessing, feature engineering, and exploratory data analysis (EDA).",
        "Deployed the best-performing LSTM model using Gradio for real-time predictions."
      ],
      technologies: ["Python", "LSTM", "RNN", "SARIMA", "Gradio"],
      image: "https://media4.giphy.com/media/RODiNw1qKHct74LACe/giphy.gif?cid=6c09b952wv5xoepwrb3mibul0e8quz6lbtrx75jwfq21ijgo&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      url: "https://github.com/Roshan0102/Ethereum-Price-Forecasting-using-Deep-Learning-models",
      type: "github"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            <div className="absolute -left-8 -right-8 top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-200"></div>
            <motion.div
              initial={{ scale: 0, rotate: -5 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="relative z-10 px-4 bg-gray-50"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
                Featured Projects
              </h2>
            </motion.div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-5">
            Discover my latest software development projects and contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
                  <ul className="list-disc list-inside mb-4 text-gray-600 space-y-2">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary rounded-full text-sm text-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    {project.type === 'github' ? (
                      <>
                        <GitHubIcon /> View on GitHub
                      </>
                    ) : (
                      <>
                        <ArticleIcon /> Read Publication
                      </>
                    )}
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

export default Projects; 