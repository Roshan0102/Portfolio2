// Content script - runs on LinkedIn pages
console.log('LinkedIn Posts Extractor loaded');

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'extractPosts') {
        try {
            const posts = extractLinkedInPosts();
            sendResponse({ success: true, posts: posts });
        } catch (error) {
            sendResponse({ success: false, error: error.message });
        }
    }
    return true; // Keep message channel open for async response
});

function extractLinkedInPosts() {
    const posts = [];

    // LinkedIn post selectors (may need adjustment based on LinkedIn's current structure)
    // Try multiple selectors as LinkedIn changes their DOM frequently
    const postSelectors = [
        '.feed-shared-update-v2',
        '[data-id^="urn:li:activity"]',
        '.profile-creator-shared-feed-update__container'
    ];

    let postElements = [];
    for (const selector of postSelectors) {
        postElements = document.querySelectorAll(selector);
        if (postElements.length > 0) break;
    }

    if (postElements.length === 0) {
        throw new Error('No posts found. Please scroll down to load posts first.');
    }

    // Extract up to 6 posts
    const maxPosts = Math.min(postElements.length, 6);

    console.log(`Found ${postElements.length} posts, extracting ${maxPosts}`);

    for (let i = 0; i < maxPosts; i++) {
        const postElement = postElements[i];

        try {
            // Extract post data
            const post = {
                id: `post-${Date.now()}-${i}`,
                text: extractPostText(postElement),
                author: extractAuthor(postElement),
                publishedAt: extractDate(postElement),
                url: extractPostUrl(postElement),
                images: extractImages(postElement),
                likes: extractEngagement(postElement, 'like'),
                comments: extractEngagement(postElement, 'comment'),
                shares: extractEngagement(postElement, 'share')
            };

            // Debug logging
            console.log(`Post ${i + 1}:`, {
                text: post.text.substring(0, 50) + '...',
                date: post.publishedAt,
                likes: post.likes,
                comments: post.comments,
                shares: post.shares,
                images: post.images.length
            });

            posts.push(post);
        } catch (error) {
            console.error('Error extracting post:', error);
        }
    }

    return posts;
}

function extractPostText(element) {
    const textSelectors = [
        '.feed-shared-update-v2__description',
        '.feed-shared-text',
        '.break-words',
        '[dir="ltr"]'
    ];

    for (const selector of textSelectors) {
        const textElement = element.querySelector(selector);
        if (textElement) {
            return textElement.innerText.trim();
        }
    }

    return 'No text content';
}

function extractAuthor(element) {
    const authorSelectors = [
        '.update-components-actor__name',
        '.feed-shared-actor__name',
        '[data-control-name="actor"]'
    ];

    for (const selector of authorSelectors) {
        const authorElement = element.querySelector(selector);
        if (authorElement) {
            return authorElement.innerText.trim();
        }
    }

    return 'Roshan J';
}

function extractDate(element) {
    const dateSelectors = [
        '.update-components-actor__sub-description',
        '.feed-shared-actor__sub-description',
        'time'
    ];

    for (const selector of dateSelectors) {
        const dateElement = element.querySelector(selector);
        if (dateElement) {
            const datetime = dateElement.getAttribute('datetime');
            if (datetime) return datetime;
            return new Date().toISOString();
        }
    }

    return new Date().toISOString();
}

function extractPostUrl(element) {
    // Strategy 1: Look for the timestamp link (usually contains the permalink)
    const timestampLink = element.querySelector('a.app-aware-link[href*="urn:li:activity"]');
    if (timestampLink) return timestampLink.href;

    // Strategy 2: Look for any link containing /feed/update/
    const feedLink = element.querySelector('a[href*="/feed/update/"]');
    if (feedLink) return feedLink.href;

    // Strategy 3: Look for any link containing /activity/
    const activityLink = element.querySelector('a[href*="/activity/"]');
    if (activityLink) return activityLink.href;

    // Strategy 4: Look inside the "Copy link to post" menu item (if visible/accessible)
    // This is hard because it's often hidden in a menu.

    // Strategy 5: Construct it from the data-urn if available
    const urnElement = element.closest('[data-urn]');
    if (urnElement) {
        const urn = urnElement.getAttribute('data-urn');
        if (urn) {
            // urn format: urn:li:activity:123456789
            const id = urn.split(':').pop();
            return `https://www.linkedin.com/feed/update/urn:li:activity:${id}/`;
        }
    }

    // Fallback to profile URL if we really can't find it
    return window.location.href;
}

function extractImages(element) {
    const images = [];

    // Try to find post images (not profile photos)
    const imageSelectors = [
        'img.ivm-view-attr__img--centered', // Post images
        'img[alt*="post"]',
        'img[alt*="image"]',
        '.update-components-image img',
        '.feed-shared-image__image-link img',
        'img.feed-shared-image__image'
    ];

    for (const selector of imageSelectors) {
        const imgElements = element.querySelectorAll(selector);
        imgElements.forEach(img => {
            if (img.src &&
                !img.src.includes('profile-photo') &&
                !img.src.includes('profile-displayphoto') &&
                !img.src.includes('company-logo') &&
                !img.src.includes('icon') &&
                !img.src.includes('ghost') &&
                !img.src.startsWith('blob:') && // Ignore blob URLs (often videos)
                !img.src.startsWith('data:') && // Ignore base64 data URLs
                img.width > 100) { // Only images larger than 100px
                images.push(img.src);
            }
        });

        if (images.length > 0) break;
    }

    return images.slice(0, 1); // Return first image only
}

function extractEngagement(element, type) {
    // Multiple strategies to extract engagement metrics

    if (type === 'like') {
        // Try different selectors for likes/reactions
        const likeSelectors = [
            '.social-details-social-counts__reactions-count',
            '[aria-label*="reaction"]',
            'button[aria-label*="reaction"] span',
            '.reactions-react-button span',
            'span.social-details-social-counts__reactions-count'
        ];

        for (const selector of likeSelectors) {
            const element2 = element.querySelector(selector);
            if (element2) {
                const text = element2.getAttribute('aria-label') || element2.innerText || '';
                const match = text.match(/(\d+[\d,]*)/);
                if (match) {
                    const number = parseInt(match[1].replace(/,/g, ''));
                    if (!isNaN(number) && number > 0) return number;
                }
            }
        }
    }

    if (type === 'comment') {
        const commentSelectors = [
            '.social-details-social-counts__comments',
            '[aria-label*="comment"]',
            'button[aria-label*="comment"] span',
            'li.social-details-social-counts__item--comments span'
        ];

        for (const selector of commentSelectors) {
            const element2 = element.querySelector(selector);
            if (element2) {
                const text = element2.getAttribute('aria-label') || element2.innerText || '';
                const match = text.match(/(\d+[\d,]*)/);
                if (match) {
                    const number = parseInt(match[1].replace(/,/g, ''));
                    if (!isNaN(number) && number > 0) return number;
                }
            }
        }
    }

    if (type === 'share') {
        const shareSelectors = [
            '.social-details-social-counts__item--reposts',
            '[aria-label*="repost"]',
            'button[aria-label*="repost"] span',
            'li.social-details-social-counts__item--reposts span'
        ];

        for (const selector of shareSelectors) {
            const element2 = element.querySelector(selector);
            if (element2) {
                const text = element2.getAttribute('aria-label') || element2.innerText || '';
                const match = text.match(/(\d+[\d,]*)/);
                if (match) {
                    const number = parseInt(match[1].replace(/,/g, ''));
                    if (!isNaN(number) && number > 0) return number;
                }
            }
        }
    }

    return 0;
}
