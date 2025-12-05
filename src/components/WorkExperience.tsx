import React from 'react';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LaunchIcon from '@mui/icons-material/Launch';

interface Experience {
    company: string;
    role: string;
    duration: string;
    location: string;
    description: string[];
    url?: string;
}

const WorkExperience: React.FC = () => {
    const experiences: Experience[] = [
        {
            company: "Axcess.io",
            role: "Cloud Engineer",
            duration: "Apr 2025 – Present",
            location: "Bangalore, India",
            description: [
                "Managed Linux and AWS cloud infrastructure, ensuring high availability and system security.",
                "Configured Managed Services Dashboards using Grafana and Prometheus for real-time monitoring.",
                "Implemented automation scripts and managed CI/CD pipelines to streamline deployment processes."
            ],
            url: "https://axcess.io/"
        },
        {
            company: "NTTF",
            role: "Full-Stack Development Trainee",
            duration: "Nov 2024 – Feb 2025",
            location: "Bangalore, India",
            description: [
                "Developed and deployed a MERN stack project on AWS (EC2, S3, Lambda).",
                "Engineered full-stack solutions using TypeScript, React, Node.js, and MongoDB.",
                "Gained hands-on experience in cloud-native development and deployment strategies."
            ],
            url: "https://nttftrg.com/"
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="relative inline-block">
                        <motion.div
                            initial={{ scale: 0, rotate: -10 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                            className="absolute -top-12 -left-8 text-5xl"
                        >
                            🚀
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
                            Work Experience
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 absolute bottom-0 left-0"
                        />
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-5">
                        My professional journey and contributions in the tech industry
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200 rounded-full" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    } items-center md:items-start gap-8`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full z-10 shadow-lg flex items-center justify-center">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full" />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl relative group">
                                        {/* Arrow for Desktop */}
                                        <div
                                            className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-l border-gray-200 transform rotate-45 ${index % 2 === 0
                                                ? '-left-2 group-hover:border-purple-300'
                                                : '-right-2 border-t-0 border-l-0 border-b border-r group-hover:border-purple-300'
                                                } transition-colors duration-300`}
                                        />

                                        <div className="flex items-center gap-3 mb-2">
                                            <WorkIcon className="text-blue-600" />
                                            <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                                        </div>

                                        <div className="flex items-center gap-2 mb-3">
                                            <h4 className="text-lg font-semibold text-purple-600">{exp.company}</h4>
                                            {exp.url && (
                                                <a
                                                    href={exp.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-purple-600 transition-colors"
                                                    title={`Visit ${exp.company}`}
                                                >
                                                    <LaunchIcon fontSize="small" />
                                                </a>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <CalendarTodayIcon fontSize="small" />
                                                <span>{exp.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <LocationOnIcon fontSize="small" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                                            {exp.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
