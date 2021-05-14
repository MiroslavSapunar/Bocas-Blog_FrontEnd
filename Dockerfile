# Base on offical Node.js Alpine image
FROM node:14-buster-slim

# env variables
ARG NEXT_PUBLIC_URL_STRAPI
ARG STRAPI_URL_BUILD
ARG STRAPI_API_KEY
ARG IG_TEST_TOKEN
ARG APP_CLIENT_TOKEN
ARG GOOGLE_TAG
ARG NEXT_PUBLIC_GOOGLE_ANALYTICS
ENV NODE_ENV production

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package.json ./
COPY ./yarn.lock ./

# Install dependencies
RUN yarn install

# Copy all files
COPY . .

# Build app
RUN yarn run build

# Expose the listening port
EXPOSE 3000

# Run npm start script when container starts
CMD [ "yarn", "start"]
