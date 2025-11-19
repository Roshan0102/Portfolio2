import json
import boto3
import os
from datetime import datetime

s3 = boto3.client('s3')
BUCKET_NAME = os.environ.get('BUCKET_NAME', 'roshan-portfolio-linkedin-posts')
FILE_KEY = 'linkedin-posts.json'

def lambda_handler(event, context):
    """
    Lambda function to save LinkedIn posts to S3
    Triggered by API Gateway POST request from Chrome extension
    """
    
    try:
        # Parse request body
        if 'body' in event:
            body = json.loads(event['body'])
        else:
            body = event
        
        posts = body.get('posts', [])
        
        if not posts:
            return {
                'statusCode': 400,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS'
                },
                'body': json.dumps({'error': 'No posts provided'})
            }
        
        # Add metadata
        data = {
            'posts': posts,
            'lastUpdated': datetime.utcnow().isoformat(),
            'totalPosts': len(posts)
        }
        
        # Save to S3
        s3.put_object(
            Bucket=BUCKET_NAME,
            Key=FILE_KEY,
            Body=json.dumps(data, indent=2),
            ContentType='application/json',
            CacheControl='max-age=300'  # Cache for 5 minutes
        )
        
        print(f"Successfully saved {len(posts)} posts to S3")
        
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            'body': json.dumps({
                'success': True,
                'message': f'Successfully saved {len(posts)} posts',
                'postsCount': len(posts)
            })
        }
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            'body': json.dumps({'error': str(e)})
        }
