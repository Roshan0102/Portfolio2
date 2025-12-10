import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizInterface from './QuizInterface';
import {
    awsCCPQuestions, awsCCPQuestions2, awsCCPQuestions3, awsCCPQuestions4,
    awsCCPQuestions5, awsCCPQuestions6, awsCCPQuestions7, awsCCPQuestions8,
    awsCCPQuestions9, awsCCPQuestions10, awsCCPQuestions11
} from '../../data/mockTests';

const MockTestRunner: React.FC = () => {
    const { testId } = useParams();
    const navigate = useNavigate();

    let questions = awsCCPQuestions;
    switch (testId) {
        case '2': questions = awsCCPQuestions2; break;
        case '3': questions = awsCCPQuestions3; break;
        case '4': questions = awsCCPQuestions4; break;
        case '5': questions = awsCCPQuestions5; break;
        case '6': questions = awsCCPQuestions6; break;
        case '7': questions = awsCCPQuestions7; break;
        case '8': questions = awsCCPQuestions8; break;
        case '9': questions = awsCCPQuestions9; break;
        case '10': questions = awsCCPQuestions10; break;
        case '11': questions = awsCCPQuestions11; break;
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
