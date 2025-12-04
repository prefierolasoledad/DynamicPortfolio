# 🚀 Dynamic Portfolio Website: Containerized Static Export

This is a modern, static portfolio website built with Next.js, Tailwind CSS, and Three.js. It is packaged using Docker and Nginx for extreme portability and relies on build arguments for easy customization.

## 🌟 Key Features

Static Export (output: 'export'): The site is pre-rendered to static HTML/CSS/JS, ensuring maximum speed and low hosting cost.

Containerized (Docker): Uses a multi-stage Docker build to produce a small, secure, Nginx-based image.

Customizable: All external services (like EmailJS) are configured via Docker build arguments, meaning users can deploy their own version without modifying the source code.

Secure Secrets Handling: Private files (.env.local, node_modules) are excluded from the final image using .dockerignore and multi-stage builds.

## 🐳 Deployment & Customization for New Users

### Prerequisites

To build and run this project locally or on any server, you must have:

#### Docker Desktop (or Docker Engine).

Your own API keys from ### EmailJS (Service ID, Template ID, and Public Key).

### Step 1: Clone the Repository

Download the source code and navigate into the project directory:

```bash
  git clone https://github.com/prefierolasoledad/DynamicPortfolio.git
  cd dymaicPortfolio
```

### Step 2: Build the Customized Docker Image

You must pass your EmailJS keys as --build-arg variables. This is the crucial step that bakes your keys into the frontend JavaScript during the build process.

Run the entire command below on a single line, replacing the placeholder values with your actual keys:

```bash
docker build -t yourname/portfolio-image:latest \
  --build-arg NEXT_PUBLIC_SERVICE_ID='YOUR_EMAILJS_SERVICE_ID' \
  --build-arg NEXT_PUBLIC_TEMPLATE_ID='YOUR_EMAILJS_TEMPLATE_ID' \
  --build-arg NEXT_PUBLIC_PUBLIC_KEY='YOUR_EMAILJS_PUBLIC_KEY' .
```

Step 3: Run the Container

The container uses Nginx and listens on port 80. The following command maps your local port 3000 to the container's port 80.

```bash
docker run -d -p 3000:80 --name portfolio-container yourname/portfolio-image:latest
```

Step 4: Verification

Access your customized portfolio in your browser at:

```bash
http://localhost:3000
```

☁️ Publishing to Docker Hub (Sharing the Image)

To make your final, built image available for easy distribution:

Log in to Docker Hub:

```bash
docker login
```

Tag the Image (Replace [YourDockerHubUsername] with your actual username):

```bash
docker tag yourname/portfolio-image:latest [YourDockerHubUsername]/portfolio-image:latest
```

Push the Image:

```bash
docker push [YourDockerHubUsername]/portfolio-image:latest
```

⚙️ Dockerfile Structure (For Reference)

This structure ensures reliable variable handling during the static build phase:
```bash
FROM node:20-alpine AS builder
WORKDIR /dymaicPortfolio
COPY package.json package-lock.json ./
RUN npm ci

ARG NEXT_PUBLIC_SERVICE_ID
ARG NEXT_PUBLIC_TEMPLATE_ID
ARG NEXT_PUBLIC_PUBLIC_KEY

# Other static ENV variables (e.g., GitHub URLs) go here
ENV NEXT_PUBLIC_GITHUB_STATS_URL="YOUR_PUBLIC_GITHUB_STATS_URL" \
    NEXT_PUBLIC_GITHUB_STREAK_STATS_URL="YOUR_PUBLIC_GITHUB_STREAK_STATS_URL"

COPY . .

# Variables are explicitly set for the shell running the build command
RUN env \
    NEXT_PUBLIC_SERVICE_ID=$NEXT_PUBLIC_SERVICE_ID \
    NEXT_PUBLIC_TEMPLATE_ID=$NEXT_PUBLIC_TEMPLATE_ID \
    NEXT_PUBLIC_PUBLIC_KEY=$NEXT_PUBLIC_PUBLIC_KEY \
    npm run build 

FROM nginx:alpine

# Only copy the final static 'out' directory
COPY --from=builder /dymaicPortfolio/out /usr/share/nginx/html 

EXPOSE 80
```
