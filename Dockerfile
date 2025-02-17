FROM node:latest
WORKDIR /project
# Copy package.json and install dependencies
COPY package*.json .
RUN npm install
COPY . .
# Set environment variables inside the container
ARG NEXT_PUBLIC_SANITY_DATASET=production
ARG NEXT_PUBLIC_SANITY_PROJECT_ID=5kygfurw
ENV NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID
RUN npm run build
EXPOSE 8009
CMD ["npm","start"]