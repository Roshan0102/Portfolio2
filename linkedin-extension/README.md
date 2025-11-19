# LinkedIn Posts Extractor - Chrome Extension

## 📋 What This Does

This Chrome extension extracts your LinkedIn posts and sends them to your AWS infrastructure, which then displays them on your portfolio with beautiful 3D rotatable cards.

## 🚀 Installation

### Step 1: Load Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable **"Developer mode"** (toggle in top right)
3. Click **"Load unpacked"**
4. Select the `linkedin-extension` folder
5. The extension should now appear in your extensions list

### Step 2: Pin the Extension

1. Click the puzzle icon (🧩) in Chrome toolbar
2. Find "LinkedIn Posts Extractor"
3. Click the pin icon to pin it to your toolbar

## ⚙️ Configuration

### Set Up AWS Endpoint

1. Click the extension icon
2. Click **"⚙️ Configure AWS Endpoint"**
3. Enter your AWS API Gateway URL (format: `https://xxxxx.execute-api.region.amazonaws.com/prod/posts`)
4. Click **"Save"**

## 📝 How to Use

1. Go to your LinkedIn profile page: `https://www.linkedin.com/in/roshan-j-628672203/`
2. **Scroll down** to load your posts (load at least 6 posts)
3. Click the extension icon
4. Click **"🚀 Extract Posts"**
5. Wait for success message
6. Your portfolio will now show the latest posts!

## 🔧 AWS Setup Required

You need to set up:

1. **S3 Bucket** - to store posts
2. **Lambda Function** - to process posts
3. **API Gateway** - to receive posts from extension

See `AWS_SETUP.md` for detailed instructions.

## 🐛 Troubleshooting

### "No posts found"
- Make sure you're on your LinkedIn profile page
- Scroll down to load posts before clicking extract
- Refresh the page and try again

### "Please refresh the LinkedIn page"
- Refresh the LinkedIn page
- Wait for it to fully load
- Try extracting again

### "Error sending to AWS"
- Check your API Gateway endpoint is correct
- Make sure CORS is enabled on API Gateway
- Check Lambda function logs in CloudWatch

## 📁 Files

- `manifest.json` - Extension configuration
- `popup.html` - Extension UI
- `popup.js` - UI logic
- `content.js` - LinkedIn scraping logic
- `background.js` - Background service worker
- `icon*.png` - Extension icons (you need to add these)

## 🎨 Icons

The extension needs icons. You can:
1. Create simple icons (16x16, 48x48, 128x128 px)
2. Or use placeholder images temporarily
3. Name them: `icon16.png`, `icon48.png`, `icon128.png`

## 📊 What Data is Extracted

For each post:
- Post text/content
- Author name
- Published date
- Post URL
- Images (if any)
- Likes count
- Comments count
- Shares count

## 🔒 Privacy

- Extension only runs on LinkedIn pages
- Only extracts data when you click the button
- Data is sent only to YOUR AWS endpoint
- No data is stored by the extension

## 💡 Tips

- Extract posts regularly to keep portfolio updated
- The extension gets the latest 6 posts
- Works best when you're logged into LinkedIn
- Make sure posts are loaded (scroll down) before extracting

## 🆘 Need Help?

If you encounter issues:
1. Check browser console for errors (F12)
2. Check AWS CloudWatch logs
3. Verify API Gateway endpoint is correct
4. Make sure you're on the correct LinkedIn page

---

**Created for Roshan J's Portfolio**
Cloud Engineer | AI & Data Science
