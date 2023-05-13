# Base image
FROM node:18-slim
RUN apt update
RUN apt install -y curl

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY packages/contract/package.json ./packages/contract/
COPY packages/server/package.json ./packages/server/
COPY packages/server/prisma/schema.prisma ./packages/server/prisma/

# Install app dependencies
RUN npm install

# Bundle app source
COPY --chown=node:node . .

# Creates a "dist" folder with the production build
RUN npm run build

ENV DATABASE_URL file:./dev.db

# Start the server using the production build
USER node
CMD [ "node", "packages/server/dist/main.js" ]
