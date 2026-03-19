FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --production

COPY src/ ./src/
COPY scripts/ ./scripts/

EXPOSE 3000

CMD ["node", "src/index.js"]
