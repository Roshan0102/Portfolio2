import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchLinkedInPosts, LinkedInPost } from '../services/linkedinService';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LinkedInPosts: React.FC = () => {
    const [posts, setPosts] = useState<LinkedInPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            const fetchedPosts = await fetchLinkedInPosts();
            setPosts(fetchedPosts);
            setLoading(false);
        };

        loadPosts();
    }, []);

    const toggleFlip = (postId: string) => {
        setFlippedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(postId)) {
                newSet.delete(postId);
            } else {
                newSet.add(postId);
            }
            return newSet;
        });
    };

    const truncateText = (text: string, maxLength: number = 200) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    return (
        <section id="linkedin-posts" className="py-16 bg-white">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Latest{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-shine">
                            LinkedIn Posts
                        </span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Stay updated with my latest insights, projects, and thoughts on cloud computing, AI, and technology
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.slice(0, 3).map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="perspective-1000"
                            >
                                <motion.div
                                    className="relative w-full h-[550px] cursor-pointer"
                                    onClick={() => toggleFlip(post.id)}
                                    animate={{ rotateY: flippedCards.has(post.id) ? 180 : 0 }}
                                    transition={{ duration: 0.6, type: "spring" }}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    {/* Front of Card */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-6 flex flex-col border border-gray-200 hover:border-purple-300 transition-all duration-300"
                                        style={{
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden',
                                        }}
                                    >
                                        {/* Post Image or Creative Placeholder */}
                                        {post.images && post.images.length > 0 ? (
                                            <div className="mb-6 rounded-lg overflow-hidden bg-gray-200 h-56 shrink-0">
                                                <img
                                                    src={post.images[0]}
                                                    alt="Post"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100/50 to-purple-100/50 h-56 shrink-0 flex items-center justify-center border-2 border-dashed border-blue-100">
                                                <LinkedInIcon className="text-blue-300" style={{ fontSize: 96 }} />
                                            </div>
                                        )}
                                        {/* Post Text */}
                                        <p className="text-gray-700 mb-4 flex-grow overflow-hidden text-sm leading-relaxed">
                                            {truncateText(post.text, 350)}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-gray-200 text-center text-xs text-gray-500 font-medium uppercase tracking-wider">
                                            Click to flip to view post
                                        </div>
                                    </div>

                                    {/* Back of Card */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-white"
                                        style={{
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden',
                                            transform: 'rotateY(180deg)',
                                        }}
                                    >
                                        <LinkedInIcon style={{ fontSize: 60 }} className="mb-4" />
                                        <h3 className="text-xl font-bold mb-4 text-center">View Full Post</h3>
                                        <p className="text-center mb-6 text-blue-100 text-sm">
                                            Click below to read the complete post on LinkedIn
                                        </p>
                                        <a
                                            href={post.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Open on LinkedIn
                                        </a>
                                        <div className="mt-6 text-center text-sm text-blue-100">
                                            ← Click to flip back
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}                    </div>
                )}

                {!loading && posts.length > 0 && (
                    <div className="mt-12 text-center">
                        <a
                            href="https://www.linkedin.com/in/roshan-j-628672203/recent-activity/all/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-100 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <LinkedInIcon fontSize="small" />
                            See More Posts
                        </a>
                    </div>
                )}

                {!loading && posts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-600">No posts available at the moment.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default LinkedInPosts;
