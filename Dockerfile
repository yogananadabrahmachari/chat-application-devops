FROM node:18-alpine

# Update apk repository
RUN apk update

# Install dependencies to compile native modules
RUN apk add --no-cache python3 make g++

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the whole project
COPY . .

# Expose port used in server.js (update if needed)
EXPOSE 3000

# Start server
CMD ["node", "server.js"]
