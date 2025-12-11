import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface QuestionAIChatProps {
    questionText: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

const QuestionAIChat: React.FC<QuestionAIChatProps> = ({ questionText, options, correctAnswer, explanation }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const suggestedPrompts = [
        "Explain this concept simply",
        "Why is the correct answer correct?",
        "Why are the other options wrong?",
        "Give me a real-world example"
    ];

    const handleSend = async (text: string) => {
        if (!text.trim()) return;

        const userMessage: Message = { role: 'user', content: text };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/.netlify/functions/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    context: `
Context: I am studying for the AWS Cloud Practitioner exam.
Question: "${questionText}"
Options: ${options.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`).join(', ')}
Correct Answer: ${correctAnswer}
Explanation: "${explanation}"

Please answer the user's question specifically about this AWS concept. Be concise, helpful, and encouraging.
                    `.trim()
                }),
            });

            const data = await response.json();

            if (data.reply) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting right now. Please try again." }]);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, something went wrong. Please check your connection." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mt-8 border-t border-gray-100 pt-6">
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-3 text-blue-600 hover:text-blue-700 font-medium transition-colors p-2 rounded-lg hover:bg-blue-50 w-full"
                >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <SmartToyIcon />
                    </div>
                    <div className="text-left">
                        <div className="font-bold">Ask AI Tutor</div>
                        <div className="text-sm text-gray-500">Have doubts? Get instant clarification on this question.</div>
                    </div>
                </button>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <SmartToyIcon />
                            <span className="font-bold">AI Tutor</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/80 hover:text-white text-sm"
                        >
                            Close
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className="h-64 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.length === 0 && (
                            <div className="text-center text-gray-500 mt-4">
                                <p className="mb-4">Hi! I can help you understand this question better.</p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {suggestedPrompts.map((prompt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleSend(prompt)}
                                            className="text-xs bg-white border border-blue-200 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors"
                                        >
                                            {prompt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] p-3 rounded-lg text-sm ${msg.role === 'user'
                                            ? 'bg-blue-600 text-white rounded-br-none'
                                            : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm">
                                    <CircularProgress size={20} className="text-blue-600" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-gray-200 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                            placeholder="Ask a question..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            disabled={isLoading}
                        />
                        <button
                            onClick={() => handleSend(input)}
                            disabled={isLoading || !input.trim()}
                            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <SendIcon fontSize="small" />
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default QuestionAIChat;
