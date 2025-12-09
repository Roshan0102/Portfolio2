import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number; // index (primary)
    correctAnswers?: number[]; // indices (for multiple choice)
    explanation: string;
}

interface QuizInterfaceProps {
    questions: Question[];
    title: string;
}

const QuizInterface: React.FC<QuizInterfaceProps> = ({ questions, title }) => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const question = questions[currentQuestion];
    const isMultiSelect = question.correctAnswers && question.correctAnswers.length > 1;

    const isCorrect = (index: number) => {
        if (question.correctAnswers && question.correctAnswers.length > 0) {
            return question.correctAnswers.includes(index);
        }
        return index === question.correctAnswer;
    };

    const handleOptionClick = (index: number) => {
        if (isAnswered) return;

        if (isMultiSelect) {
            setSelectedOptions(prev => {
                if (prev.includes(index)) {
                    return prev.filter(i => i !== index);
                }
                return [...prev, index];
            });
        } else {
            setSelectedOptions([index]);
        }
    };

    const handleSubmit = () => {
        setIsAnswered(true);

        // Calculate score
        let correct = false;
        if (isMultiSelect) {
            // Check if all selected options are correct and all correct options are selected
            const correctIndices = question.correctAnswers || [];
            const allSelectedAreCorrect = selectedOptions.every(i => correctIndices.includes(i));
            const allCorrectAreSelected = correctIndices.every(i => selectedOptions.includes(i));
            correct = allSelectedAreCorrect && allCorrectAreSelected;
        } else {
            correct = selectedOptions.length > 0 && isCorrect(selectedOptions[0]);
        }

        if (correct) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOptions([]);
            setIsAnswered(false);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return (
            <section className="py-20 bg-white min-h-screen pt-24">
                <div className="section-container max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 text-center"
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircleIcon className="text-green-600 text-5xl" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Test Completed!</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            You scored <span className="font-bold text-blue-600 text-2xl">{score}</span> out of <span className="font-bold text-gray-800 text-2xl">{questions.length}</span>
                        </p>

                        <div className="space-y-4">
                            <button
                                onClick={() => {
                                    setIsFinished(false);
                                    setCurrentQuestion(0);
                                    setScore(0);
                                    setSelectedOptions([]);
                                    setIsAnswered(false);
                                }}
                                className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
                            >
                                Restart Test
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className="w-full py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-xl font-bold hover:border-gray-300 hover:bg-gray-50 transition-all"
                            >
                                Back to Portfolio
                            </button>
                            <button
                                onClick={() => navigate('/mock-tests/aws-ccp')}
                                className="w-full py-3 text-gray-500 hover:text-gray-700 font-medium"
                            >
                                Back to Mock Tests
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-white min-h-screen pt-24">
            <div className="section-container max-w-4xl">
                <div className="flex justify-between items-center mb-8">
                    <button
                        onClick={() => navigate('/mock-tests/aws-ccp')}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <ArrowBackIcon /> Exit Test
                    </button>
                    <div className="text-gray-600 font-medium">
                        Question {currentQuestion + 1} / {questions.length}
                    </div>
                </div>

                <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
                >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                        {question.text.replace('(Select Multiple)', '')}
                        {isMultiSelect && (
                            <span className="ml-2 inline-block bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full font-medium">
                                Select Multiple
                            </span>
                        )}
                    </h3>

                    <div className="space-y-4">
                        {question.options.map((option, index) => {
                            let optionClass = "w-full text-left p-4 rounded-xl border-2 transition-all ";
                            const isSelected = selectedOptions.includes(index);
                            const isThisCorrect = isCorrect(index);

                            if (!isAnswered) {
                                if (isSelected) {
                                    optionClass += "border-blue-500 bg-blue-50";
                                } else {
                                    optionClass += "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
                                }
                            } else {
                                if (isThisCorrect) {
                                    optionClass += "border-green-500 bg-green-50";
                                } else if (isSelected) {
                                    optionClass += "border-red-500 bg-red-50";
                                } else {
                                    optionClass += "border-gray-200 opacity-50";
                                }
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleOptionClick(index)}
                                    disabled={isAnswered}
                                    className={optionClass}
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{option}</span>
                                        {isAnswered && isThisCorrect && (
                                            <CheckCircleIcon className="text-green-500" />
                                        )}
                                        {isAnswered && isSelected && !isThisCorrect && (
                                            <CancelIcon className="text-red-500" />
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {isAnswered && question.explanation && question.explanation.trim() !== "" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100"
                        >
                            <h4 className="font-bold text-blue-800 mb-2">Explanation:</h4>
                            <p className="text-blue-900">{question.explanation}</p>
                        </motion.div>
                    )}

                    <div className="mt-8 flex justify-end gap-4">
                        {!isAnswered ? (
                            <button
                                onClick={handleSubmit}
                                disabled={selectedOptions.length === 0}
                                className={`px-8 py-3 rounded-xl font-bold text-white transition-all ${selectedOptions.length === 0
                                    ? 'bg-gray-300 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
                                    }`}
                            >
                                Submit Answer
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                className="px-8 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all"
                            >
                                {currentQuestion === questions.length - 1 ? 'Finish Test' : 'Next Question'}
                            </button>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default QuizInterface;
