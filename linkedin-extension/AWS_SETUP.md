# AWS Setup Guide

## Architecture

```
Chrome Extension
    ↓
API Gateway (POST /posts)
    ↓
Lambda Function
    ↓
S3 Bucket (linkedin-posts.json)
    ↓
Portfolio Website (fetches from S3)
```

## Step 1: Create S3 Bucket

1. Go to AWS Console → S3
2. Click "Create bucket"
3. Bucket name: `roshan-portfolio-linkedin-posts` (or your choice)
4. Region: Choose your preferred region
5. **Uncheck** "Block all public access" (we need public read)
6. Click "Create bucket"

### Configure Bucket for Public Read

1. Go to bucket → Permissions
2. Bucket Policy → Edit
3. Paste this policy (replace `YOUR-BUCKET-NAME`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/linkedin-posts.json"
    }
  ]
}
```

4. Enable CORS:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": []
  }
]
```

## Step 2: Create Lambda Function

1. Go to AWS Console → Lambda
2. Click "Create function"
3. Function name: `SaveLinkedInPosts`
4. Runtime: **Python 3.12**
5. Click "Create function"

### Add Lambda Code

Copy the code from `lambda_function.py` (provided separately)

### Configure Environment Variables

1. Go to Configuration → Environment variables
2. Add:
   - Key: `BUCKET_NAME`
   - Value: `roshan-portfolio-linkedin-posts` (your bucket name)

### Add S3 Permissions

1. Go to Configuration → Permissions
2. Click the role name
3. Add inline policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject"
      ],
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

## Step 3: Create API Gateway

1. Go to AWS Console → API Gateway
2. Click "Create API"
3. Choose "REST API" → Build
4. API name: `LinkedInPostsAPI`
5. Click "Create API"

### Create Resource and Method

1. Actions → Create Resource
   - Resource Name: `posts`
   - Click "Create Resource"

2. Select `/posts` → Actions → Create Method → POST
3. Integration type: Lambda Function
4. Select your region
5. Lambda Function: `SaveLinkedInPosts`
6. Click "Save"

### Enable CORS

1. Select `/posts`
2. Actions → Enable CORS
3. Check all methods
4. Click "Enable CORS"

### Deploy API

1. Actions → Deploy API
2. Deployment stage: `[New Stage]`
3. Stage name: `prod`
4. Click "Deploy"

### Get API Endpoint

1. Go to Stages → prod → /posts → POST
2. Copy the "Invoke URL"
3. It looks like: `https://xxxxx.execute-api.region.amazonaws.com/prod/posts`
4. **Save this URL** - you'll need it for the Chrome extension!

## Step 4: Test the Setup

### Test Lambda Function

1. Go to Lambda → Test
2. Create test event:

```json
{
  "body": "{\"posts\":[{\"id\":\"test\",\"text\":\"Test post\",\"author\":\"Roshan J\",\"publishedAt\":\"2024-01-01\",\"url\":\"https://linkedin.com\",\"images\":[],\"likes\":0,\"comments\":0,\"shares\":0}]}"
}
```

3. Click "Test"
4. Check S3 bucket for `linkedin-posts.json`

## Step 5: Update Portfolio

The portfolio is already configured to fetch from S3. Just update the S3 URL in the code if needed.

## Costs

- **S3**: ~$0.01/month (minimal storage and requests)
- **Lambda**: Free tier covers it (1M requests/month free)
- **API Gateway**: Free tier covers it (1M requests/month free)

**Total: Essentially FREE** for personal portfolio use!

## Security Notes

- API Gateway is public (no auth) - this is fine for this use case
- Only the Chrome extension knows the endpoint
- S3 file is public read (needed for portfolio)
- Lambda has minimal permissions (only S3 write)

## Troubleshooting

### Posts not saving to S3
- Check Lambda CloudWatch logs
- Verify S3 bucket name in Lambda env variables
- Check Lambda IAM permissions

### CORS errors
- Verify CORS is enabled on API Gateway
- Redeploy API after enabling CORS
- Check S3 CORS configuration

### Extension can't send data
- Verify API Gateway endpoint URL
- Check browser console for errors
- Test API Gateway with Postman

---

**You're all set!** 🎉

Once you have the API Gateway URL, configure it in the Chrome extension and start extracting posts!
