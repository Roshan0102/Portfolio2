// LinkedIn Posts Service - Fetches from S3
const S3_BUCKET_URL = 'https://roshan-portfolio-linkedin-posts.s3.us-east-1.amazonaws.com/linkedin-posts.json';
// This URL points to your actual S3 bucket

export interface LinkedInPost {
    id: string;
    text: string;
    author: string;
    publishedAt: string;
    url: string;
    images?: string[];
    likes?: number;
    comments?: number;
    shares?: number;
}

export const fetchLinkedInPosts = async (): Promise<LinkedInPost[]> => {
    try {
        const response = await fetch(S3_BUCKET_URL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
            cache: 'no-cache' // Always get fresh data
        });

        if (!response.ok) {
            console.warn('Failed to fetch from S3, using fallback data');
            return getMockPosts();
        }

        const data = await response.json();
        const posts = data.posts || [];

        return posts.slice(0, 6);
    } catch (error) {
        console.error('Error fetching LinkedIn posts from S3:', error);
        return getMockPosts();
    }
};

// Fallback mock data
const getMockPosts = (): LinkedInPost[] => {
    return [
        {
            id: '1',
            text: '🚀 Excited to share my latest project on AWS cloud infrastructure automation! Leveraging Lambda, S3, and API Gateway to build scalable solutions. #CloudComputing #AWS',
            author: 'Roshan J',
            publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            url: 'https://www.linkedin.com/in/roshan-j-628672203/',
            images: [],
            likes: 45,
            comments: 8,
            shares: 3,
        },
        {
            id: '2',
            text: '💡 Just completed an amazing deep learning project using TensorFlow! The power of AI never ceases to amaze me. Looking forward to implementing this in production. #AI #MachineLearning',
            author: 'Roshan J',
            publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            url: 'https://www.linkedin.com/in/roshan-j-628672203/',
            images: [],
            likes: 62,
            comments: 12,
            shares: 5,
        },
        {
            id: '3',
            text: '🎯 Thrilled to announce that I\'ve successfully deployed a serverless application using AWS SAM! The future of cloud computing is here. #Serverless #DevOps',
            author: 'Roshan J',
            publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            url: 'https://www.linkedin.com/in/roshan-j-628672203/',
            images: [],
            likes: 38,
            comments: 6,
            shares: 2,
        }
    ];
};
