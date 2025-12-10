import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AWSCCPMockTests: React.FC = () => {
    const navigate = useNavigate();

    const mockTests = [
        { id: 1, name: "Mock Test 1", questions: 67, duration: "90 mins" },
        { id: 2, name: "Mock Test 2", questions: 73, duration: "90 mins" },
        { id: 3, name: "Mock Test 3", questions: 70, duration: "90 mins" },
        { id: 4, name: "Mock Test 4", questions: 70, duration: "90 mins" },
        { id: 5, name: "Mock Test 5", questions: 70, duration: "90 mins" },
        { id: 6, name: "Mock Test 6", questions: 70, duration: "90 mins" },
        { id: 7, name: "Mock Test 7", questions: 70, duration: "90 mins" },
        { id: 8, name: "Mock Test 8", questions: 70, duration: "90 mins" },
        { id: 9, name: "Mock Test 9", questions: 70, duration: "90 mins" },
        { id: 10, name: "Mock Test 10", questions: 70, duration: "90 mins" },
        { id: 11, name: "Mock Test 11", questions: 29, duration: "45 mins" },
    ];

    return (
        <section className="py-20 bg-white min-h-screen pt-24">
            <div className="section-container">
                <button
                    onClick={() => navigate('/mock-tests')}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors"
                >
                    <ArrowBackIcon /> Back to Mock Tests
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
                        AWS Certified Cloud Practitioner
                    </h2>
                    <p className="text-gray-600">
                        Select a mock test to begin practice.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {mockTests.map((test) => (
                        <motion.div
                            key={test.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all flex justify-between items-center"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{test.name}</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    {test.questions} Questions • {test.duration}
                                </p>
                            </div>
                            <button
                                onClick={() => navigate(`/mock-tests/aws-ccp/${test.id}`)}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Start Test
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AWSCCPMockTests;
