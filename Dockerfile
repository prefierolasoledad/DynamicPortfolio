FROM node:20-alpine AS builder
WORKDIR /dymaicPortfolio
COPY package.json package-lock.json ./
RUN npm ci

ENV NEXT_PUBLIC_GITHUB_STATS_URL="https://github-readme-stats-pi-mauve-35.vercel.app/" \
    NEXT_PUBLIC_GITHUB_STREAK_STATS_URL="https://github-readme-streak-stats.herokuapp.com"

COPY . .
RUN npm run build 

FROM nginx:alpine

COPY --from=builder /dymaicPortfolio/out /usr/share/nginx/html 

EXPOSE 80