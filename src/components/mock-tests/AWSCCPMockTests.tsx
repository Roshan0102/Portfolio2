import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';

const AWSCCPMockTests: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'tests' | 'materials'>('tests');
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    const studyMaterials = [
        { name: "ACID Explanation", type: "image", file: "ACID Explanation.png" },
        { name: "AWS Academy Modules 1-5 Notes", type: "docx", file: "AWS ACADEMY 1-5 MODULES NOTES.docx" },
        { name: "AWS Academy Modules 6-10 Notes", type: "docx", file: "AWS ACADEMY 6-10 MODULES NOTES.docx" },
        { name: "AWS Full Notes", type: "docx", file: "AWS Full Notess.docx" },
        { name: "Cloud Adoption Framework (CAF)", type: "image", file: "CAF.png" },
        { name: "Computing and Storage Notes", type: "docx", file: "COMPUTING and STORAGE.docx" },
        { name: "Database Notes", type: "docx", file: "DATABASE.docx" },
        { name: "Database Flowchart", type: "image", file: "Database Flowchart.png" },
        { name: "S3 vs EBS vs EFS", type: "image", file: "Difference between S3,EBS & EFS.png" },
        { name: "Security & AI/ML", type: "image", file: "Seucrity&AIML.png" },
        { name: "VPC Diagram", type: "image", file: "VPC Diagram.png" },
        { name: "WAF Pillars", type: "image", file: "WAF Pillars.png" },
    ];

    const handleStartTest = (testId: number, testName: string) => {
        // Send notification email
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: '196d8c62-340f-4232-8bdf-e45c96448232',
                subject: `Mock Test Started: ${testName}`,
                message: `User started ${testName} at ${new Date().toLocaleString()}`,
                from_name: 'Mock Test System'
            })
        }).catch(err => console.error('Failed to send start test email:', err));

        navigate(`/mock-tests/aws-ccp/${testId}`);
    };

    return (
        <section className="py-20 bg-white min-h-screen pt-24 relative">
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
                    className="mb-8 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
                        AWS Certified Cloud Practitioner
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Comprehensive resources to help you ace your exam.
                    </p>

                    {/* Disclaimer */}
                    <p className="text-sm text-red-500 bg-red-50 p-3 rounded-lg border border-red-100 inline-block mb-8">
                        Disclaimer: These mock tests are for practice purposes only and are not affiliated with AWS.
                    </p>

                    {/* Tabs */}
                    <div className="flex justify-center gap-4 mb-8">
                        <button
                            onClick={() => setActiveTab('tests')}
                            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'tests'
                                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            Mock Tests
                        </button>
                        <button
                            onClick={() => setActiveTab('materials')}
                            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'materials'
                                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            Study Materials
                        </button>
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    {activeTab === 'tests' ? (
                        <motion.div
                            key="tests"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {mockTests.map((test) => (
                                <motion.div
                                    key={test.id}
                                    className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all flex flex-col sm:flex-row justify-between items-center gap-4"
                                >
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">{test.name}</h3>
                                        <p className="text-gray-600 text-sm mt-1">
                                            {test.questions} Questions • {test.duration}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleStartTest(test.id, test.name)}
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
                                    >
                                        Start Test
                                    </button>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="materials"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            {studyMaterials.map((material, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition-all flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${material.type === 'image' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'
                                            }`}>
                                            {material.type === 'image' ? <ImageIcon /> : <DescriptionIcon />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                                {material.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                                                {material.type.toUpperCase()}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {material.type === 'image' && (
                                            <button
                                                onClick={() => setPreviewImage(`/study-materials/${material.file}`)}
                                                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                title="Preview"
                                            >
                                                <VisibilityIcon />
                                            </button>
                                        )}
                                        <a
                                            href={`/study-materials/${material.file}`}
                                            download
                                            className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                            title="Download"
                                        >
                                            <DownloadIcon />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Image Preview Modal */}
            <AnimatePresence>
                {previewImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setPreviewImage(null)}
                    >
                        <button
                            onClick={() => setPreviewImage(null)}
                            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
                        >
                            <CloseIcon fontSize="large" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={previewImage}
                            alt="Preview"
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default AWSCCPMockTests;
