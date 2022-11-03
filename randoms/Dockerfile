FROM node:alpine

WORKDIR /app
ENV PORT=80
ENV REACT_APP_SERVICES=

COPY ./package*.json .
RUN npm i

COPY . .
CMD npm start