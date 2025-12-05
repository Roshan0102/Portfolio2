import { Handler } from '@netlify/functions';

const GROQ_API_KEY = process.env.GROQ_API_KEY;

export const handler: Handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { message, context } = JSON.parse(event.body || '{}');

        if (!GROQ_API_KEY) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Server configuration error: API Key missing' }),
            };
        }

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: context },
                    { role: 'user', content: message }
                ],
                temperature: 0.7,
                max_tokens: 500,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || 'Failed to fetch from Groq');
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ reply: data.choices[0].message.content }),
        };

    } catch (error: any) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to process request' }),
        };
    }
};
