import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FlagIcon from '@mui/icons-material/Flag';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Confetti from 'react-confetti';
import QuestionAIChat from './QuestionAIChat';

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

// Helper to categorize questions based on keywords
const categorizeQuestion = (text: string): string => {
    const lowerText = text.toLowerCase();
    if (lowerText.match(/cost|price|billing|budget|saving|on-demand|reserved|spot|payment|calculator/)) return 'Billing & Cost Management';
    if (lowerText.match(/security|iam|policy|encryption|guardduty|shield|waf|compliance|responsibility|protect|attack|threat/)) return 'Security & Compliance';
    if (lowerText.match(/ec2|s3|rds|dynamo|lambda|vpc|route53|cloudfront|storage|compute|database|network|instance/)) return 'Technology & Services';
    if (lowerText.match(/cloud|benefit|advantage|agility|elasticity|scalability|reliability|global|region|availability zone/)) return 'Cloud Concepts';
    return 'General';
};

const QuizInterface: React.FC<QuizInterfaceProps> = ({ questions, title }) => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // Store user answers: { questionIndex: [selectedOptionIndices] }
    const [userAnswers, setUserAnswers] = useState<Record<number, number[]>>({});

    // Store submission status: Set of question indices that have been submitted
    const [submittedQuestions, setSubmittedQuestions] = useState<Set<number>>(new Set());

    // Store flagged questions: Set of question indices
    const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());

    // UI States
    const [isFinished, setIsFinished] = useState(false);
    const [showMobilePalette, setShowMobilePalette] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    // Update window size for confetti
    useEffect(() => {
        const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const question = questions[currentQuestion];
    const isMultiSelect = question.correctAnswers && question.correctAnswers.length > 1;
    const currentSelected = userAnswers[currentQuestion] || [];
    const isSubmitted = submittedQuestions.has(currentQuestion);

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isFinished) return;

            const key = e.key.toUpperCase();
            // Options A-F
            if (['A', 'B', 'C', 'D', 'E', 'F'].includes(key)) {
                if (!isSubmitted) {
                    const index = key.charCodeAt(0) - 65; // A=0, B=1, etc.
                    if (index < question.options.length) {
                        handleOptionClick(index);
                    }
                }
            }
            // Enter to Submit or Next
            else if (e.key === 'Enter') {
                if (isSubmitted) {
                    handleNext();
                } else {
                    handleSubmitAnswer();
                }
            }
            // 'F' key for Flag (optional, but might conflict with option F if exists. Let's stick to mouse for flag or a modifier)
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentQuestion, isFinished, userAnswers, isSubmitted, question]);

    const handleOptionClick = (index: number) => {
        if (isFinished || isSubmitted) return;

        setUserAnswers(prev => {
            const current = prev[currentQuestion] || [];
            if (isMultiSelect) {
                if (current.includes(index)) {
                    return { ...prev, [currentQuestion]: current.filter(i => i !== index) };
                }
                return { ...prev, [currentQuestion]: [...current, index] };
            } else {
                return { ...prev, [currentQuestion]: [index] };
            }
        });
    };

    const handleFlag = () => {
        // If already flagged, just unflag (stay on page)
        // If not flagged, flag and move to next (if available)
        if (flaggedQuestions.has(currentQuestion)) {
            const newSet = new Set(flaggedQuestions);
            newSet.delete(currentQuestion);
            setFlaggedQuestions(newSet);
        } else {
            setFlaggedQuestions(prev => new Set(prev).add(currentQuestion));
            // Auto-advance if not last question
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            }
        }
    };

    const handleSubmitAnswer = () => {
        if (isSubmitted) return;

        // Validation
        if (currentSelected.length === 0) {
            alert("Please select an answer.");
            return;
        }
        if (isMultiSelect && currentSelected.length < 2) {
            alert("Please select multiple answers.");
            return;
        }

        setSubmittedQuestions(prev => new Set(prev).add(currentQuestion));

        // If it was flagged, remove the flag since it's now submitted
        if (flaggedQuestions.has(currentQuestion)) {
            const newSet = new Set(flaggedQuestions);
            newSet.delete(currentQuestion);
            setFlaggedQuestions(newSet);
        }
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsFinished(true);
        }
    };

    const jumpToQuestion = (index: number) => {
        // Allow jumping only if NOT submitted (so they can answer flagged/skipped ones)
        // OR if it IS submitted, we might want to let them review it? 
        // User said: "user should not able to go to the submitted question"
        if (submittedQuestions.has(index)) return;

        setCurrentQuestion(index);
        setShowMobilePalette(false);
    };

    // Calculate Results
    const results = useMemo(() => {
        if (!isFinished) return null;

        let score = 0;
        const categoryStats: Record<string, { total: number; correct: number }> = {};

        questions.forEach((q, index) => {
            const userSelected = userAnswers[index] || [];
            const category = categorizeQuestion(q.text);

            if (!categoryStats[category]) {
                categoryStats[category] = { total: 0, correct: 0 };
            }
            categoryStats[category].total += 1;

            let isCorrect = false;
            if (q.correctAnswers && q.correctAnswers.length > 1) {
                const correctIndices = q.correctAnswers;
                const allSelectedAreCorrect = userSelected.every(i => correctIndices.includes(i));
                const allCorrectAreSelected = correctIndices.every(i => userSelected.includes(i));
                isCorrect = allSelectedAreCorrect && allCorrectAreSelected;
            } else {
                const correctIndex = q.correctAnswer;
                isCorrect = userSelected.length > 0 && userSelected[0] === correctIndex;
            }

            if (isCorrect) {
                score++;
                categoryStats[category].correct += 1;
            }
        });

        return { score, categoryStats };
    }, [isFinished, questions, userAnswers]);

    // Check correctness for current question (for immediate feedback)
    const isCurrentCorrect = useMemo(() => {
        if (!isSubmitted) return false;
        const userSelected = userAnswers[currentQuestion] || [];

        if (isMultiSelect) {
            const correctIndices = question.correctAnswers || [];
            const allSelectedAreCorrect = userSelected.every(i => correctIndices.includes(i));
            const allCorrectAreSelected = correctIndices.every(i => userSelected.includes(i));
            return allSelectedAreCorrect && allCorrectAreSelected;
        } else {
            return userSelected.length > 0 && userSelected[0] === question.correctAnswer;
        }
    }, [isSubmitted, userAnswers, currentQuestion, question, isMultiSelect]);

    if (isFinished && results) {
        const percentage = Math.round((results.score / questions.length) * 100);
        const isPassed = percentage >= 70;

        return (
            <section className="py-20 bg-white min-h-screen pt-24 relative overflow-hidden">
                {isPassed && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={500} />}

                <div className="section-container max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
                    >
                        <div className="text-center mb-10">
                            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${isPassed ? 'bg-green-100' : 'bg-red-100'}`}>
                                {isPassed ? <CheckCircleIcon className="text-green-600 text-6xl" /> : <CancelIcon className="text-red-600 text-6xl" />}
                            </div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-2">{isPassed ? 'Congratulations!' : 'Keep Practicing!'}</h2>
                            <p className="text-gray-600 text-xl">
                                You scored <span className={`font-bold text-3xl ${isPassed ? 'text-green-600' : 'text-red-600'}`}>{percentage}%</span> ({results.score}/{questions.length})
                            </p>
                        </div>

                        {/* Performance Breakdown */}
                        <div className="grid md:grid-cols-2 gap-6 mb-10">
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Performance Breakdown</h3>
                                <div className="space-y-4">
                                    {Object.entries(results.categoryStats).map(([category, stats]) => (
                                        <div key={category}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-700 font-medium">{category}</span>
                                                <span className="text-gray-500">{stats.correct}/{stats.total}</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                <div
                                                    className={`h-2.5 rounded-full ${stats.correct === stats.total ? 'bg-green-500' : stats.correct > 0 ? 'bg-blue-500' : 'bg-red-400'}`}
                                                    style={{ width: `${(stats.correct / stats.total) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col justify-center space-y-4">
                                <button
                                    onClick={() => {
                                        setIsFinished(false);
                                        setCurrentQuestion(0);
                                        setUserAnswers({});
                                        setSubmittedQuestions(new Set());
                                        setFlaggedQuestions(new Set());
                                    }}
                                    className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg text-lg"
                                >
                                    Restart Test
                                </button>
                                <button
                                    onClick={() => navigate('/mock-tests/aws-ccp')}
                                    className="w-full py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-xl font-bold hover:border-gray-300 hover:bg-gray-50 transition-all text-lg"
                                >
                                    Back to Mock Tests
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    // Palette Content (Reused for Desktop Sidebar and Mobile Drawer)
    const PaletteContent = () => (
        <>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-800">Question Palette</h3>
                {/* Close button only for mobile drawer */}
                <button onClick={() => setShowMobilePalette(false)} className="lg:hidden">
                    <CloseIcon className="text-gray-500 hover:text-gray-800" />
                </button>
            </div>

            <div className="grid grid-cols-5 gap-2">
                {questions.map((_, idx) => {
                    const isSubmitted = submittedQuestions.has(idx);
                    const isFlagged = flaggedQuestions.has(idx);
                    const isCurrent = currentQuestion === idx;

                    let bgClass = 'bg-gray-100 text-gray-600 hover:bg-gray-200';

                    if (isCurrent) {
                        bgClass = 'bg-blue-600 text-white ring-2 ring-blue-300';
                    } else if (isSubmitted) {
                        const userSelected = userAnswers[idx] || [];
                        const q = questions[idx];
                        let isCorrect = false;
                        if (q.correctAnswers && q.correctAnswers.length > 1) {
                            const correctIndices = q.correctAnswers;
                            const allSelectedAreCorrect = userSelected.every(i => correctIndices.includes(i));
                            const allCorrectAreSelected = correctIndices.every(i => userSelected.includes(i));
                            isCorrect = allSelectedAreCorrect && allCorrectAreSelected;
                        } else {
                            isCorrect = userSelected.length > 0 && userSelected[0] === q.correctAnswer;
                        }

                        bgClass = isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700';
                    } else if (isFlagged) {
                        bgClass = 'bg-yellow-100 text-yellow-700 border border-yellow-300';
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => jumpToQuestion(idx)}
                            disabled={isSubmitted}
                            className={`aspect-square rounded-lg font-medium text-sm flex items-center justify-center transition-all relative ${bgClass} ${isSubmitted ? 'cursor-not-allowed opacity-75' : ''}`}
                        >
                            {idx + 1}
                            {isFlagged && !isCurrent && <span className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full -mt-1 -mr-1"></span>}
                        </button>
                    );
                })}
            </div>

            <div className="mt-8 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div> Current
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-100 rounded"></div> Correct
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-100 rounded"></div> Incorrect
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded"></div> Flagged
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-100 rounded"></div> Unanswered
                </div>
            </div>
        </>
    );

    return (
        <section className="py-20 bg-gray-50 min-h-screen pt-24">
            <div className="w-full px-4 lg:px-8 flex gap-8 items-start justify-center">

                {/* Main Content Area */}
                <div className="flex-1 max-w-4xl">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <button
                            onClick={() => navigate('/mock-tests/aws-ccp')}
                            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            <ArrowBackIcon /> Exit
                        </button>

                        <div className="flex items-center gap-4">
                            <span className="text-gray-600 font-medium">
                                Question {currentQuestion + 1} / {questions.length}
                            </span>
                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setShowMobilePalette(true)}
                                className="lg:hidden p-2 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                <MenuIcon />
                            </button>
                        </div>
                    </div>

                    {/* Main Question Card */}
                    <motion.div
                        key={currentQuestion}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
                    >
                        {/* Progress Bar */}
                        <div className="h-2 bg-gray-100 w-full">
                            <motion.div
                                className="h-full bg-blue-600"
                                initial={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            />
                        </div>

                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                                    {categorizeQuestion(question.text)}
                                </span>
                                <button
                                    onClick={handleFlag}
                                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${flaggedQuestions.has(currentQuestion) ? 'text-yellow-500' : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    <FlagIcon fontSize="small" />
                                    {flaggedQuestions.has(currentQuestion) ? 'Flagged' : 'Flag for Review'}
                                </button>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
                                {question.text}
                            </h3>

                            <div className="space-y-4">
                                {question.options.map((option, index) => {
                                    const isSelected = currentSelected.includes(index);
                                    const letter = String.fromCharCode(65 + index); // A, B, C...

                                    let borderClass = 'border-gray-200 hover:border-blue-200 hover:bg-gray-50';
                                    let bgClass = 'bg-white';
                                    let textClass = 'text-gray-700';
                                    let iconBgClass = 'bg-gray-100 text-gray-500';

                                    if (isSelected) {
                                        borderClass = 'border-blue-500';
                                        bgClass = 'bg-blue-50';
                                        textClass = 'text-blue-900 font-medium';
                                        iconBgClass = 'bg-blue-500 text-white';
                                    }

                                    if (isSubmitted) {
                                        const isCorrectOption = isMultiSelect
                                            ? question.correctAnswers?.includes(index)
                                            : question.correctAnswer === index;

                                        if (isCorrectOption) {
                                            borderClass = 'border-green-500';
                                            bgClass = 'bg-green-50';
                                            textClass = 'text-green-900 font-medium';
                                            iconBgClass = 'bg-green-500 text-white';
                                        } else if (isSelected && !isCorrectOption) {
                                            borderClass = 'border-red-500';
                                            bgClass = 'bg-red-50';
                                            textClass = 'text-red-900 font-medium';
                                            iconBgClass = 'bg-red-500 text-white';
                                        } else {
                                            borderClass = 'border-gray-100 opacity-50';
                                        }
                                    }

                                    return (
                                        <button
                                            key={index}
                                            disabled={isSubmitted}
                                            onClick={() => handleOptionClick(index)}
                                            className={`w-full p-4 rounded-xl text-left transition-all border-2 flex items-start gap-4 group ${borderClass} ${bgClass}`}
                                        >
                                            <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold flex-shrink-0 transition-colors ${iconBgClass}`}>
                                                {letter}
                                            </span>
                                            <span className={`text-lg ${textClass}`}>
                                                {option}
                                            </span>

                                            {isSubmitted && (
                                                <div className="ml-auto">
                                                    {(isMultiSelect ? question.correctAnswers?.includes(index) : question.correctAnswer === index) && (
                                                        <CheckCircleIcon className="text-green-500" />
                                                    )}
                                                    {isSelected && !(isMultiSelect ? question.correctAnswers?.includes(index) : question.correctAnswer === index) && (
                                                        <CancelIcon className="text-red-500" />
                                                    )}
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Keyboard Shortcut Hint */}
                            <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                                <KeyboardIcon fontSize="small" />
                                <span>Tip: Press <strong>A-D</strong> to select, <strong>Enter</strong> to submit/next</span>
                            </div>

                            {/* Explanation Section */}
                            <AnimatePresence>
                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className={`mt-8 p-6 rounded-xl border ${isCurrentCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            {isCurrentCorrect ? <CheckCircleIcon className="text-green-600" /> : <CancelIcon className="text-red-600" />}
                                            <h4 className={`font-bold ${isCurrentCorrect ? 'text-green-800' : 'text-red-800'}`}>
                                                {isCurrentCorrect ? 'Correct Answer!' : 'Incorrect Answer'}
                                            </h4>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            {question.explanation || "No explanation provided."}
                                        </p>

                                        {/* AI Tutor Integration */}
                                        <QuestionAIChat
                                            questionText={question.text}
                                            options={question.options}
                                            correctAnswer={
                                                isMultiSelect
                                                    ? (question.correctAnswers || []).map(i => question.options[i]).join(', ')
                                                    : question.options[question.correctAnswer]
                                            }
                                            explanation={question.explanation}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="bg-gray-50 p-6 border-t border-gray-100 flex justify-end items-center gap-4">
                            {!isSubmitted ? (
                                <button
                                    onClick={handleSubmitAnswer}
                                    className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                                >
                                    Submit Answer
                                </button>
                            ) : (
                                <button
                                    onClick={handleNext}
                                    className="px-8 py-3 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-900 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                                >
                                    {currentQuestion === questions.length - 1 ? 'Finish Test' : 'Next Question'}
                                </button>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Desktop Sidebar Palette */}
                <div className="hidden lg:block w-80 sticky top-24 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
                    <PaletteContent />
                </div>

                {/* Mobile Drawer Palette */}
                <AnimatePresence>
                    {showMobilePalette && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowMobilePalette(false)}
                                className="fixed inset-0 bg-black z-40 lg:hidden"
                            />
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'tween' }}
                                className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 p-6 overflow-y-auto lg:hidden"
                            >
                                <PaletteContent />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default QuizInterface;
