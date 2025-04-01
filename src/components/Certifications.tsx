import React from 'react';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import LaunchIcon from '@mui/icons-material/Launch';

interface Certification {
  title: string;
  issuer: string;
  image: string;
  url: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
      url: "https://drive.google.com/file/d/1MijLh-1fJyoa0qORvMmDyI05AGpdpvlg/view?usp=sharing"
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      image: "https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7000.jpg",
      url: "https://drive.google.com/file/d/1KVTHm4c4ertQGarQHYJUTM8ran0pY5gV/view?usp=sharing"
    },
    {
      title: "Data Mining",
      issuer: "NPTEL",
      image: "https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4766.jpg",
      url: "https://drive.google.com/file/d/1erd1dJ_lxk_pHvdIxfok_cc6C6iMAcxm/view?usp=sharing"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      image: "https://img.freepik.com/free-vector/cloud-computing-concept-illustration_114360-7578.jpg",
      url: "https://drive.google.com/file/d/1nVkYh26b5gI3FWBlobwYj7YkcJYyibtg/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-800 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <LaunchIcon /> View Certificate
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {cert.title}
                </h3>
                <p className="text-gray-600">
                  Issued by {cert.issuer}
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 bg-primary px-3 py-1 rounded-full text-sm text-gray-800">
                    <VerifiedIcon fontSize="small" /> Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 