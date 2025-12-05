import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Project {
  title: string;
  description: string[];
  technologies: string[];
  image: string;
  url: string;
  type: 'github' | 'publication';
}

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: "Scalable 3-Tier Web Infrastructure on AWS",
      description: [
        "Designed and deployed a highly available 3-tier architecture on AWS using Terraform.",
        "Implemented VPC with public/private subnets, NAT Gateways, and Application Load Balancer.",
        "Configured Auto Scaling Groups for web and application tiers to ensure high availability.",
        "Set up RDS Multi-AZ deployment for database redundancy and disaster recovery."
      ],
      technologies: ["AWS", "Terraform", "VPC", "EC2", "RDS", "ALB", "Auto Scaling"],
      image: "/assets/AWS_Three_Tier_Architecture_Project_GIF.gif",
      url: "https://github.com/Roshan0102", // Placeholder URL
      type: "github"
    },
    {
      title: "Multi-Layer AWS Load Balancer Architecture",
      description: [
        "Architected a multi-layer load balancing solution to distribute traffic efficiently.",
        "Utilized Network Load Balancer (NLB) for high throughput and Application Load Balancer (ALB) for content-based routing.",
        "Enhanced security with AWS WAF and Security Groups integration.",
        "Optimized performance and reduced latency for global users."
      ],
      technologies: ["AWS", "NLB", "ALB", "WAF", "Route53"],
      image: "/assets/AWS_Load_Balancer_Architecture_GIF.gif",
      url: "https://github.com/Roshan0102", // Placeholder URL
      type: "github"
    },
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

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

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
              <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-400 to-blue-600 bg-clip-text text-transparent inline-block animate-shine">
                Featured Projects
              </h2>
            </motion.div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-5">
            Discover my latest software development projects and contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300"
              >
                <div className="md:grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-full bg-gray-100 flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-gray-400 text-center p-8">
                        <GitHubIcon style={{ fontSize: 64, opacity: 0.2 }} />
                        <p className="mt-2 text-sm">Preview coming soon</p>
                      </div>
                    )}
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
          </AnimatePresence>
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-semibold hover:bg-gray-50 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {showAll ? (
                <>
                  Show Less <KeyboardArrowUpIcon />
                </>
              ) : (
                <>
                  View More Projects <KeyboardArrowDownIcon />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;