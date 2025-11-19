// Background service worker
chrome.runtime.onInstalled.addListener(() => {
    console.log('LinkedIn Posts Extractor installed');
});

// Handle messages from popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'sendToAWS') {
        // This can be used for additional background processing if needed
        sendResponse({ success: true });
    }
    return true;
});
