import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { portfolioContext } from '../data/portfolioContext';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const AIChat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const messagesRef = useRef<Message[]>([]);

    useEffect(() => {
        messagesRef.current = messages;
    }, [messages]);

    const lastSentLengthRef = useRef(0);

    useEffect(() => {
        const handleUnload = () => {
            if (messagesRef.current.length === 0 || messagesRef.current.length === lastSentLengthRef.current) return;

            // Update last sent length to prevent duplicate sends for the same content
            lastSentLengthRef.current = messagesRef.current.length;

            const chatTranscript = messagesRef.current
                .map(msg => `${msg.role.toUpperCase()}: ${msg.content}`)
                .join('\n\n');

            const data = {
                access_key: '196d8c62-340f-4232-8bdf-e45c96448232',
                subject: 'New AI Chat Session Transcript',
                message: `Here is the chat transcript from a visitor session:\n\n${chatTranscript}`,
                from_name: 'Portfolio AI Chat'
            };

            // Use fetch with keepalive to ensure the request is sent even if the page is closing
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data),
                keepalive: true
            }).catch(err => console.error('Failed to send chat transcript:', err));
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                handleUnload();
            }
        };

        // 'pagehide' is more reliable on mobile browsers than 'beforeunload'
        window.addEventListener('pagehide', handleUnload);
        window.addEventListener('beforeunload', handleUnload);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('pagehide', handleUnload);
            window.removeEventListener('beforeunload', handleUnload);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch('/.netlify/functions/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage,
                    context: portfolioContext
                }),
            });

            const data = await response.json();

            if (data.error) throw new Error(data.error);

            setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "Sorry, I'm having trouble connecting right now. Please try again later."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = (content: string) => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="ask-ai" className="min-h-screen flex flex-col justify-center py-20 bg-white relative overflow-hidden">
            <div className="section-container max-w-4xl mx-auto px-4 relative z-10">

                {/* Header Branding */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <AutoAwesomeIcon className="text-purple-600" fontSize="large" />
                        <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-shine">
                            Ask AI
                        </span>
                    </div>
                    <p className="text-gray-500">
                        Analyze my profile against your job description or ask about my skills.
                    </p>
                </div>

                {/* Results Area */}
                <AnimatePresence>
                    {messages.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6 mb-8 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar"
                        >
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    {/* Avatar */}
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${msg.role === 'assistant'
                                        ? 'bg-gradient-to-br from-blue-100 to-purple-100 text-purple-600'
                                        : 'bg-gray-100 text-gray-600'
                                        }`}>
                                        {msg.role === 'assistant' ? <AutoAwesomeIcon fontSize="small" /> : <span className="font-bold">You</span>}
                                    </div>

                                    {/* Message Bubble */}
                                    <div className={`flex-1 p-6 rounded-2xl shadow-sm border ${msg.role === 'assistant'
                                        ? 'bg-white border-gray-100 text-gray-800'
                                        : 'bg-blue-50 border-blue-100 text-blue-900'
                                        }`}>
                                        <div className="prose prose-sm max-w-none whitespace-pre-wrap leading-relaxed">
                                            {msg.content}
                                        </div>

                                        {/* Assistant Actions */}
                                        {msg.role === 'assistant' && (
                                            <div className="mt-4 flex items-center gap-2 pt-4 border-t border-gray-100">
                                                <button
                                                    onClick={() => handleCopy(msg.content)}
                                                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-purple-600 transition-colors"
                                                >
                                                    {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
                                                    {copied ? 'Copied' : 'Copy response'}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Search Bar Container */}
                <div className="rounded-2xl shadow-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] mb-8 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
                    <div className="bg-white rounded-2xl">
                        <form onSubmit={handleSubmit} className="relative flex items-center">
                            <div className="absolute left-4 text-gray-400">
                                <AutoAwesomeIcon />
                            </div>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Paste a JD or ask: 'Do you have experience with AWS?'"
                                className="w-full py-4 pl-12 pr-14 text-lg text-gray-700 bg-transparent border-none focus:ring-0 placeholder-gray-400 rounded-2xl focus:outline-none"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className={`absolute right-2 p-2 rounded-xl transition-all duration-200 ${input.trim()
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg transform hover:scale-105'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <SendIcon />
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Empty State / Suggestions */}
                {messages.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
                    >
                        {[
                            "Summarize your experience",
                            "Why should I hire you?",
                            "Analyze this job description..."
                        ].map((suggestion, i) => (
                            <button
                                key={i}
                                onClick={() => setInput(suggestion)}
                                className="p-4 text-sm text-gray-600 bg-gray-50 rounded-xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all text-left"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default AIChat;
