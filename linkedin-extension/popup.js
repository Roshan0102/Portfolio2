// Popup script
document.addEventListener('DOMContentLoaded', function () {
    const extractBtn = document.getElementById('extractBtn');
    const configBtn = document.getElementById('configBtn');
    const configSection = document.getElementById('configSection');
    const saveConfigBtn = document.getElementById('saveConfig');
    const apiEndpointInput = document.getElementById('apiEndpoint');
    const statusDiv = document.getElementById('status');

    // Load saved API endpoint
    chrome.storage.sync.get(['apiEndpoint'], function (result) {
        if (result.apiEndpoint) {
            apiEndpointInput.value = result.apiEndpoint;
        }
    });

    // Toggle config section
    configBtn.addEventListener('click', function () {
        configSection.style.display = configSection.style.display === 'none' ? 'block' : 'none';
    });

    // Save configuration
    saveConfigBtn.addEventListener('click', function () {
        const endpoint = apiEndpointInput.value.trim();
        if (endpoint) {
            chrome.storage.sync.set({ apiEndpoint: endpoint }, function () {
                showStatus('Configuration saved!', 'success');
                setTimeout(() => {
                    configSection.style.display = 'none';
                }, 1500);
            });
        } else {
            showStatus('Please enter a valid endpoint', 'error');
        }
    });

    // Extract posts
    extractBtn.addEventListener('click', async function () {
        // Check if API endpoint is configured
        chrome.storage.sync.get(['apiEndpoint'], async function (result) {
            if (!result.apiEndpoint) {
                showStatus('Please configure AWS endpoint first', 'error');
                configSection.style.display = 'block';
                return;
            }

            extractBtn.disabled = true;
            extractBtn.innerHTML = '<span class="spinner"></span> Extracting...';
            showStatus('Extracting posts from LinkedIn...', 'info');

            try {
                // Get current tab
                const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

                // Check if on LinkedIn profile page
                if (!tab.url.includes('linkedin.com/in/')) {
                    showStatus('Please navigate to your LinkedIn profile page', 'error');
                    resetButton();
                    return;
                }

                // Send message to content script to extract posts
                chrome.tabs.sendMessage(tab.id, { action: 'extractPosts' }, function (response) {
                    if (chrome.runtime.lastError) {
                        showStatus('Error: Please refresh the LinkedIn page and try again', 'error');
                        resetButton();
                        return;
                    }

                    if (response && response.success) {
                        // Send posts to AWS
                        sendToAWS(response.posts, result.apiEndpoint);
                    } else {
                        showStatus(response?.error || 'Failed to extract posts', 'error');
                        resetButton();
                    }
                });
            } catch (error) {
                showStatus('Error: ' + error.message, 'error');
                resetButton();
            }
        });
    });

    function sendToAWS(posts, endpoint) {
        showStatus('Sending to AWS...', 'info');

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ posts: posts })
        })
            .then(response => response.json())
            .then(data => {
                showStatus(`✅ Success! ${posts.length} posts updated`, 'success');
                resetButton();
            })
            .catch(error => {
                showStatus('Error sending to AWS: ' + error.message, 'error');
                resetButton();
            });
    }

    function showStatus(message, type) {
        statusDiv.textContent = message;
        statusDiv.className = type;
        statusDiv.style.display = 'block';
    }

    function resetButton() {
        extractBtn.disabled = false;
        extractBtn.innerHTML = '🚀 Extract Posts';
    }
});
