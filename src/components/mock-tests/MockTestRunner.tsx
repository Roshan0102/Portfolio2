import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizInterface from './QuizInterface';
import { awsCCPQuestions, awsCCPQuestions2, awsCCPQuestions3 } from '../../data/mockTests';

const MockTestRunner: React.FC = () => {
    const { testId } = useParams();
    const navigate = useNavigate();

    let questions = awsCCPQuestions;
    if (testId === '2') {
        questions = awsCCPQuestions2;
    } else if (testId === '3') {
        questions = awsCCPQuestions3;
    }

    if (!questions || questions.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Test Not Found</h2>
                    <button
                        onClick={() => navigate('/mock-tests/aws-ccp')}
                        className="text-blue-600 hover:underline"
                    >
                        Return to Mock Tests
                    </button>
                </div>
            </div>
        );
    }

    return <QuizInterface questions={questions} title={`AWS CCP Mock Test ${testId}`} />;
};

export default MockTestRunner;
