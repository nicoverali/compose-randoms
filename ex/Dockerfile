FROM node:alpine
WORKDIR /app
ENV PORT=80

COPY package*.json .
RUN npm i

COPY . .
CMD npm start