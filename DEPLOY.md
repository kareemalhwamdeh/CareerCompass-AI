# CareerCompass AI - Deployment Guide

This guide covers different options for deploying the CareerCompass AI application.

## Option 1: Traditional VPS/Dedicated Server

### Prerequisites
- A server running Linux (Ubuntu 20.04+ recommended)
- Node.js 16+ installed
- Nginx or Apache for reverse proxy
- (Optional) PM2 for process management

### Setup Steps

1. Clone the repository:
```bash
git clone https://github.com/your-username/CareerCompass-AI.git
cd CareerCompass-AI
```

2. Install dependencies:
```bash
npm install
cd client
npm install
cd ..
```

3. Create and configure .env file:
```bash
cp .env.example .env
# Edit .env with your production settings
```

4. Build the client:
```bash
npm run build
```

5. Install PM2 (optional but recommended):
```bash
npm install -g pm2
```

6. Start the application with PM2:
```bash
pm2 start server/server.js --name "careercompass"
pm2 save
pm2 startup
```

7. Configure Nginx as a reverse proxy:
```nginx
server {
    listen 80;
    server_name yourdomainname.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. Enable HTTPS with Certbot/Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomainname.com
```

## Option 2: Docker Deployment

### Prerequisites
- Docker and Docker Compose installed

### Setup Steps

1. Create a Dockerfile in the project root:
```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN cd client && npm install && npm run build

EXPOSE 3001

CMD ["npm", "start"]
```

2. Create a docker-compose.yml file:
```yaml
version: '3'
services:
  careercompass:
    build: .
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
      - PORT=3001
      - API_KEY=your_api_key_here
    restart: always
```

3. Build and start the container:
```bash
docker-compose up -d
```

## Option 3: Platform as a Service (Render/Heroku/Vercel)

### Render Deployment

1. Create a render.yaml file in the project root:
```yaml
services:
  - name: careercompass
    type: web
    env: node
    buildCommand: npm install && cd client && npm install && npm run build && cd ..
    startCommand: node server/server.js
    envVars:
      - key: NODE_ENV
        value: production
      - key: API_KEY
        sync: false
```

2. Configure the application on Render:
   - Connect your GitHub repository
   - Configure environment variables
   - Deploy the application

### Heroku Deployment

1. Create a Procfile in the project root:
```
web: npm start
```

2. Deploy to Heroku:
```bash
heroku create careercompass-ai
git push heroku main
heroku config:set API_KEY=your_api_key_here
```

## Maintenance and Monitoring

- Set up application monitoring with tools like New Relic or Datadog
- Configure regular backups if you're using a database
- Set up automated security updates for your server
- Implement logging with tools like Winston or Bunyan