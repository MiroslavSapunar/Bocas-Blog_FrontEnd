# Base on offical Node.js Alpine image
FROM node:14-buster-slim

# env variables
ARG NEXT_PUBLIC_STRAPI_URL
ARG STRAPI_URL_BUILD
ENV NODE_ENV production

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run npm start script when container starts
CMD [ "npm", "start"]
