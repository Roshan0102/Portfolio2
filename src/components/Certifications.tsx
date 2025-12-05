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
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      image: "https://images.ctfassets.net/xz1dnu24egyd/72URY4Vg59wKsYMpTqrMel/194347274767abce3c04be7be72a75a3/AWS-Logo__1_.png",
      url: "https://drive.google.com/file/d/1nVkYh26b5gI3FWBlobwYj7YkcJYyibtg/view?usp=sharing"
    },
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
      url: "https://drive.google.com/file/d/1MijLh-1fJyoa0qORvMmDyI05AGpdpvlg/view?usp=sharing"
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      image: "https://cdn.the-scientist.com/assets/articleNo/71687/aImg/52292/62dc0501-8dda-4bd7-9ba9-fa1a9b8c7cb4-l.jpg",
      url: "https://drive.google.com/file/d/1KVTHm4c4ertQGarQHYJUTM8ran0pY5gV/view?usp=sharing"
    },
    {
      title: "Data Mining",
      issuer: "NPTEL",
      image: "https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4766.jpg",
      url: "https://drive.google.com/file/d/1erd1dJ_lxk_pHvdIxfok_cc6C6iMAcxm/view?usp=sharing"
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
          <div className="relative inline-block pb-3">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 200
              }}
              className="absolute w-8 h-8 -left-6 -top-2 rounded-full border-4 border-blue-500"
            />
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                type: "spring",
                stiffness: 200
              }}
              className="absolute w-6 h-6 -right-4 -bottom-1 rounded-full border-4 border-purple-500"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-400 to-blue-600 bg-clip-text text-transparent inline-block animate-shine">
              Certifications
            </h2>
            <div className="absolute w-full h-0.5 bg-gray-200 bottom-0 left-0">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
              />
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-5">
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
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-purple-300"
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